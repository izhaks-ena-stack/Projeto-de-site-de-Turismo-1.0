/**
 * Auth.js – Sistema de autenticação do Explora Minas
 * Usuários persistidos no localStorage; sessão no sessionStorage (requisito TP2).
 */

const Auth = (() => {

  const USUARIOS_KEY = 'exploraMinas_usuarios';
  const SESSAO_KEY   = 'exploraMinas_sessao';
  const CIDADES_KEY  = 'exploraMinas_cidades';

  // ── Admin padrão ──────────────────────────────────────────────────────
  function init() {
    let usuarios = _getUsuarios();
    if (!usuarios.find(u => u.email === 'admin@explora.mg')) {
      usuarios.push({
        id: 'admin',
        nome: 'Administrador',
        email: 'admin@explora.mg',
        senha: 'admin123',
        perfil: 'admin',
        admin: true,
        visitados: [],
        favoritos: [],
        criadoEm: new Date().toISOString()
      });
      _salvarUsuarios(usuarios);
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────────
  function _getUsuarios() { return JSON.parse(localStorage.getItem(USUARIOS_KEY)) || []; }
  function _salvarUsuarios(lista) { localStorage.setItem(USUARIOS_KEY, JSON.stringify(lista)); }
  function _gerarId() { return 'u_' + Math.random().toString(36).substr(2, 9); }

  // ── Cadastro ──────────────────────────────────────────────────────────
  function cadastrar(nome, email, senha) {
    const usuarios = _getUsuarios();
    if (usuarios.find(u => u.email === email))
      return { ok: false, erro: 'Este e-mail já está cadastrado.' };
    if (senha.length < 6)
      return { ok: false, erro: 'A senha deve ter ao menos 6 caracteres.' };
    usuarios.push({
      id: _gerarId(), nome, email, senha,
      perfil: 'usuario', admin: false,
      visitados: [], favoritos: [],
      criadoEm: new Date().toISOString()
    });
    _salvarUsuarios(usuarios);
    return { ok: true };
  }

  // ── Login → sessão no sessionStorage ─────────────────────────────────
  function login(email, senha) {
    const usuario = _getUsuarios().find(u => u.email === email && u.senha === senha);
    if (!usuario) return { ok: false, erro: 'E-mail ou senha incorretos.' };
    const sessao = { id: usuario.id, nome: usuario.nome, email: usuario.email, perfil: usuario.perfil, admin: !!usuario.admin };
    sessionStorage.setItem(SESSAO_KEY, JSON.stringify(sessao));
    return { ok: true, perfil: usuario.perfil };
  }

  // ── Logout ────────────────────────────────────────────────────────────
  function logout() {
    sessionStorage.removeItem(SESSAO_KEY);
    window.location.href = 'index.html';
  }

  // ── Sessão ────────────────────────────────────────────────────────────
  function getSessao() {
    return JSON.parse(sessionStorage.getItem(SESSAO_KEY));
  }

  // ── Proteção ─────────────────────────────────────────────────────────
  function exigirLogin(redir = 'login.html') {
    if (!getSessao()) { window.location.href = redir; return false; }
    return true;
  }
  function exigirAdmin() {
    const s = getSessao();
    if (!s || s.perfil !== 'admin') { window.location.href = 'index.html'; return false; }
    return true;
  }

  // ── Visitados ─────────────────────────────────────────────────────────
  function getVisitados() {
    const s = getSessao(); if (!s) return [];
    const u = _getUsuarios().find(u => u.id === s.id);
    return u ? (u.visitados || []) : [];
  }
  function toggleVisitado(cidadeId) {
    const s = getSessao(); if (!s) return false;
    const usuarios = _getUsuarios();
    const idx = usuarios.findIndex(u => u.id === s.id); if (idx === -1) return false;
    const arr = usuarios[idx].visitados || [];
    const pos = arr.indexOf(cidadeId);
    if (pos === -1) arr.push(cidadeId); else arr.splice(pos, 1);
    usuarios[idx].visitados = arr;
    _salvarUsuarios(usuarios);
    return pos === -1;
  }

  // ── Favoritos ─────────────────────────────────────────────────────────
  function getFavoritos() {
    const s = getSessao(); if (!s) return [];
    const u = _getUsuarios().find(u => u.id === s.id);
    return u ? (u.favoritos || []) : [];
  }
  function toggleFavorito(cidadeId) {
    const s = getSessao(); if (!s) return false;
    const usuarios = _getUsuarios();
    const idx = usuarios.findIndex(u => u.id === s.id); if (idx === -1) return false;
    const arr = usuarios[idx].favoritos || [];
    const pos = arr.indexOf(cidadeId);
    if (pos === -1) arr.push(cidadeId); else arr.splice(pos, 1);
    usuarios[idx].favoritos = arr;
    _salvarUsuarios(usuarios);
    return pos === -1;
  }

  // ── Admin: usuários ───────────────────────────────────────────────────
  function listarUsuarios() { return _getUsuarios().map(({ senha, ...u }) => u); }
  function removerUsuario(id) {
    if (id === 'admin') return { ok: false, erro: 'Não é possível remover o admin padrão.' };
    _salvarUsuarios(_getUsuarios().filter(u => u.id !== id));
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

  // ── Admin: cidades ────────────────────────────────────────────────────
  function getCidades() {
    const salvo = localStorage.getItem(CIDADES_KEY);
    if (salvo) {
      try {
        return JSON.parse(salvo);
      } catch (error) {
        console.warn('exploraMinas_cidades inválido, restaurando dados padrão:', error);
        localStorage.removeItem(CIDADES_KEY);
      }
    }
    if (typeof dados !== 'undefined' && dados.cidades) {
      salvarCidades(dados.cidades);
      return dados.cidades;
    }
    return [];
  }
  function salvarCidades(lista) { localStorage.setItem(CIDADES_KEY, JSON.stringify(lista)); }
  function adicionarCidade(cidade) {
    const lista = getCidades();
    cidade.id = Math.max(...lista.map(c => Number(c.id) || 0), 0) + 1;
    cidade.atracoes = cidade.atracoes || [];
    lista.push(cidade);
    salvarCidades(lista);
    return cidade;
  }
  function atualizarCidade(cidade) {
    const lista = getCidades();
    const idx = lista.findIndex(c => c.id === cidade.id);
    if (idx === -1) return false;
    lista[idx] = cidade; salvarCidades(lista); return true;
  }
  function removerCidade(id) { salvarCidades(getCidades().filter(c => c.id !== id)); }

  init();

  return {
    cadastrar, login, logout, getSessao,
    exigirLogin, exigirAdmin,
    getVisitados, toggleVisitado,
    getFavoritos, toggleFavorito,
    listarUsuarios, removerUsuario, alterarPerfil,
    getCidades, salvarCidades, adicionarCidade, atualizarCidade, removerCidade
  };

})();
