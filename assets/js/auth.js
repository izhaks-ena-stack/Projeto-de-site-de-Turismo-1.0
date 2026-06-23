/**
 * Auth.js – Sistema de autenticação do Explora Minas
 * Armazena usuários e sessão no localStorage.
 */

const Auth = (() => {

  const USUARIOS_KEY = 'exploraMinas_usuarios';
  const SESSAO_KEY   = 'exploraMinas_sessao';

  // ── Inicializa admin padrão ────────────────────────────────────────────
  function init() {
    let usuarios = _getUsuarios();
    if (!usuarios.find(u => u.email === 'admin@explora.mg')) {
      usuarios.push({
        id: 'admin',
        nome: 'Administrador',
        email: 'admin@explora.mg',
        senha: 'admin123',
        perfil: 'admin',
        visitados: [],
        criadoEm: new Date().toISOString()
      });
      _salvarUsuarios(usuarios);
    }
  }

  // ── Helpers internos ───────────────────────────────────────────────────
  function _getUsuarios() {
    return JSON.parse(localStorage.getItem(USUARIOS_KEY)) || [];
  }
  function _salvarUsuarios(lista) {
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(lista));
  }
  function _gerarId() {
    return 'u_' + Math.random().toString(36).substr(2, 9);
  }

  // ── Cadastro ───────────────────────────────────────────────────────────
  function cadastrar(nome, email, senha) {
    const usuarios = _getUsuarios();
    if (usuarios.find(u => u.email === email)) {
      return { ok: false, erro: 'Este e-mail já está cadastrado.' };
    }
    if (senha.length < 6) {
      return { ok: false, erro: 'A senha deve ter ao menos 6 caracteres.' };
    }
    const novoUsuario = {
      id: _gerarId(),
      nome,
      email,
      senha,
      perfil: 'usuario',
      visitados: [],
      criadoEm: new Date().toISOString()
    };
    usuarios.push(novoUsuario);
    _salvarUsuarios(usuarios);
    return { ok: true };
  }

  // ── Login ──────────────────────────────────────────────────────────────
  function login(email, senha) {
    const usuarios = _getUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (!usuario) {
      return { ok: false, erro: 'E-mail ou senha incorretos.' };
    }
    // Salva sessão (sem expor senha)
    const sessao = { id: usuario.id, nome: usuario.nome, email: usuario.email, perfil: usuario.perfil };
    localStorage.setItem(SESSAO_KEY, JSON.stringify(sessao));
    return { ok: true, perfil: usuario.perfil };
  }

  // ── Logout ─────────────────────────────────────────────────────────────
  function logout() {
    localStorage.removeItem(SESSAO_KEY);
    window.location.href = 'login.html';
  }

  // ── Sessão atual ───────────────────────────────────────────────────────
  function getSessao() {
    return JSON.parse(localStorage.getItem(SESSAO_KEY));
  }

  // ── Proteção de página ─────────────────────────────────────────────────
  function exigirLogin(redirecionarPara = 'login.html') {
    if (!getSessao()) {
      window.location.href = redirecionarPara;
      return false;
    }
    return true;
  }
  function exigirAdmin() {
    const s = getSessao();
    if (!s || s.perfil !== 'admin') {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  }

  // ── Visitados por usuário ──────────────────────────────────────────────
  function getVisitados() {
    const s = getSessao();
    if (!s) return [];
    const usuarios = _getUsuarios();
    const u = usuarios.find(u => u.id === s.id);
    return u ? (u.visitados || []) : [];
  }

  function toggleVisitado(cidadeId) {
    const s = getSessao();
    if (!s) return false;
    const usuarios = _getUsuarios();
    const idx = usuarios.findIndex(u => u.id === s.id);
    if (idx === -1) return false;
    const visitados = usuarios[idx].visitados || [];
    const pos = visitados.indexOf(cidadeId);
    if (pos === -1) {
      visitados.push(cidadeId);
    } else {
      visitados.splice(pos, 1);
    }
    usuarios[idx].visitados = visitados;
    _salvarUsuarios(usuarios);
    return pos === -1; // true = marcou, false = desmarcou
  }

  // ── Admin: CRUD de usuários ────────────────────────────────────────────
  function listarUsuarios() {
    return _getUsuarios().map(({ senha, ...u }) => u); // não expõe senha
  }

  function removerUsuario(id) {
    if (id === 'admin') return { ok: false, erro: 'Não é possível remover o admin padrão.' };
    const usuarios = _getUsuarios().filter(u => u.id !== id);
    _salvarUsuarios(usuarios);
    return { ok: true };
  }

  function alterarPerfil(id, novoPerfil) {
    const usuarios = _getUsuarios();
    const idx = usuarios.findIndex(u => u.id === id);
    if (idx === -1) return { ok: false, erro: 'Usuário não encontrado.' };
    usuarios[idx].perfil = novoPerfil;
    _salvarUsuarios(usuarios);
    return { ok: true };
  }

  // ── Admin: CRUD de cidades ─────────────────────────────────────────────
  const CIDADES_KEY = 'exploraMinas_cidades';

  function getCidades() {
    const salvo = localStorage.getItem(CIDADES_KEY);
    if (salvo) return JSON.parse(salvo);
    // usa dados do app.js como base (dados globais)
    if (typeof dados !== 'undefined') {
      localStorage.setItem(CIDADES_KEY, JSON.stringify(dados.cidades));
      return dados.cidades;
    }
    return [];
  }

  function salvarCidades(lista) {
    localStorage.setItem(CIDADES_KEY, JSON.stringify(lista));
  }

  function adicionarCidade(cidade) {
    const lista = getCidades();
    const maxId = lista.reduce((m, c) => Math.max(m, c.id), 0);
    cidade.id = maxId + 1;
    cidade.atracoes = cidade.atracoes || [];
    lista.push(cidade);
    salvarCidades(lista);
    return cidade;
  }

  function atualizarCidade(cidade) {
    const lista = getCidades();
    const idx = lista.findIndex(c => c.id === cidade.id);
    if (idx === -1) return false;
    lista[idx] = cidade;
    salvarCidades(lista);
    return true;
  }

  function removerCidade(id) {
    const lista = getCidades().filter(c => c.id !== id);
    salvarCidades(lista);
  }

  // ── Init ───────────────────────────────────────────────────────────────
  init();

  return {
    cadastrar, login, logout, getSessao,
    exigirLogin, exigirAdmin,
    getVisitados, toggleVisitado,
    listarUsuarios, removerUsuario, alterarPerfil,
    getCidades, salvarCidades, adicionarCidade, atualizarCidade, removerCidade
  };

})();
