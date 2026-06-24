const dados = {
  cidades: [
    {
      id: 1,
      nome: "Ouro Preto",
      descricao: "Primeira cidade brasileira declarada Patrimônio Cultural da Humanidade pela UNESCO, em 1980.",
      conteudo: "Ouro Preto é um tesouro do período colonial brasileiro. Suas ruas de pedra, igrejas barrocas e casarões históricos contam a história do Ciclo do Ouro. A cidade também é movida pelas tradições universitárias da UFOP e por um carnaval animado.",
      estado: "Minas Gerais",
      distancia: "96km de BH",
      populacao: "~74.000 habitantes",
      destaque: true,
      imagem_principal: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Ouro_Preto%2C_Brazil%2C_2011_%28cropped%29.jpg",
      mapa: "https://maps.app.goo.gl/3Vu9swvpx3ncmqJi7",
      atracoes: [
        {
          id: 1,
          nome: "Igreja de São Francisco de Assis",
          descricao: "Obra-prima do barroco mineiro projetada por Aleijadinho.",
          imagem: "https://images.adsttc.com/media/images/67b7/8290/7cae/7a01/887f/f12a/large_jpg/o-significado-historico-do-forro-da-igreja-de-sao-francisco-de-assis-em-salvador-e-os-desafios-de-preservacao-do-patrimonio-cultural_2.jpg?1740079778"
        },
        {
          id: 2,
          nome: "Museu da Inconfidência",
          descricao: "Museu histórico dedicado à Inconfidência Mineira, instalado na antiga Casa de Câmara.",
          imagem: "https://minasumluxo.com.br/wp-content/uploads/2025/04/inconfidentes-2.jpg"
        },
        {
          id: 3,
          nome: "Mina do Chico Rei",
          descricao: "Mina histórica de ouro aberta à visitação, com mais de 300 anos de história.",
          imagem: "https://entremochilasemalinhas.com/wp-content/uploads/2023/04/chico-rei-1-1024x819.jpg"
        }
      ]
    },
    {
      id: 2,
      nome: "Tiradentes",
      descricao: "Vila colonial charmosa, famosa pelo passeio de Maria Fumaça e pelo artesanato.",
      conteudo: "Tiradentes é o refúgio mais charmoso do Ciclo do Ouro. Com ritmo tranquilo, ruas de pedra e belas igrejas, a cidade encanta visitantes durante todo o ano. O passeio de trem a vapor até São João del-Rei é imperdível.",
      estado: "Minas Gerais",
      distancia: "190km de BH",
      populacao: "~8.000 habitantes",
      destaque: true,
      imagem_principal: "https://www.infoescola.com/wp-content/uploads/2012/05/tiradentes-minas-gerais_452390755.jpg",
      mapa: "https://maps.app.goo.gl/pw9pEzNax21qk7QM7",
      atracoes: [
        {
          id: 1,
          nome: "Maria Fumaça",
          descricao: "Trem a vapor histórico que liga Tiradentes a São João del-Rei desde 1881.",
          imagem: "https://irp-cdn.multiscreensite.com/36e30871/dms3rep/multi/Maria+Fuma%C3%A7a+Destaque.jpg"
        },
        {
          id: 2,
          nome: "Igreja Matriz de Santo Antônio",
          descricao: "Uma das mais ricas igrejas barrocas do Brasil, com fachada ornamentada em pedra-sabão.",
          imagem: "https://guiaassettiradentes.wordpress.com/wp-content/uploads/2016/05/orgc3a3o-de-tubos-da-matriz-de-santo-antc3b4nio-tiradentes.jpg?w=640"
        },
        {
          id: 3,
          nome: "Trilha da Serra de São José",
          descricao: "Trilha com vistas panorâmicas da cidade e da região.",
          imagem: "https://serpedalante.com/wp-content/uploads/2019/03/20181224_170752.jpg"
        }
      ]
    },
    {
      id: 3,
      nome: "Serra do Cipó",
      descricao: "Paraíso do ecoturismo com cachoeiras, trilhas e paisagens naturais de tirar o fôlego.",
      conteudo: "A Serra do Cipó é um dos pontos turísticos mais belos de Minas Gerais. Com o Parque Nacional da Serra do Cipó, o destino oferece cachoeiras, trilhas ecológicas, rapel e muito contato com a natureza. Ideal para aventureiros.",
      estado: "Minas Gerais",
      distancia: "100km de BH",
      populacao: "~8.500 habitantes",
      destaque: true,
      imagem_principal: "https://i0.wp.com/pisa.tur.br/blog/wp-content/uploads/2019/07/serra-do-cip%C3%B3-capablog.jpg?fit=1920%2C840&ssl=1",
      mapa: "https://maps.app.goo.gl/dTFhFLrMSBfX6ADc8",
      atracoes: [
        {
          id: 1,
          nome: "Cachoeira Véu da Noiva",
          descricao: "Uma das cachoeiras mais famosas do parque, com queda d'água impressionante.",
          imagem: "https://viagemcomemocao.com.br/wp-content/uploads/2017/08/veu-da-noiva-cipo.jpg"
        },
        {
          id: 2,
          nome: "Parque Nacional da Serra do Cipó",
          descricao: "Unidade de conservação com flora do cerrado e campos rupestres únicos.",
          imagem: "https://www.sgb.gov.br/documents/d/guest/serradocipo-flavioveloso-jpg"
        },
        {
          id: 3,
          nome: "Rio Cipó",
          descricao: "Excelente para banho e prática de caiaque em meio à natureza.",
          imagem: "https://portalserradocipo.com.br/wp-content/uploads/2021/02/canoagem-no-rio-cipo.jpg"
        }
      ]
    },
    {
      id: 4,
      nome: "Diamantina",
      descricao: "Cidade histórica patrimônio da UNESCO, berço de Juscelino Kubitschek.",
      conteudo: "Diamantina guarda a história dos garimpos de diamante do século XVIII. Com arquitetura colonial preservada, museus e serras ao redor, é um destino cultural e histórico único. Também é famosa pela sua música, o seresta.",
      estado: "Minas Gerais",
      distancia: "290km de BH",
      populacao: "~47.000 habitantes",
      destaque: false,
      imagem_principal: "https://www.shutterstock.com/image-photo/diamantina-minas-gerais-brasil-jul-600nw-2343876777.jpg",
      mapa: "https://maps.google.com/?q=Diamantina,MG",
      atracoes: [
        {
          id: 1,
          nome: "Casa de JK",
          descricao: "Casa natal do ex-presidente Juscelino Kubitschek, transformada em museu.",
          imagem: "https://visitediamantina.com.br/assets/images/produtos/f200a228148ad70d923574087b113d1b.jpg"
        },
        {
          id: 2,
          nome: "Mercado Municipal",
          descricao: "Mercado histórico do século XIX com estrutura de madeira tombada pelo IPHAN.",
          imagem: "https://media-cdn.tripadvisor.com/media/photo-s/0b/55/1b/4a/mercado-municipal-dos.jpg"
        },
        {
          id: 3,
          nome: "Gruta do Salitre",
          descricao: "Caverna com formações rochosas e lagoa interna de águas cristalinas.",
          imagem: "https://i.ytimg.com/vi/4EkK0RBgq-M/sddefault.jpg"
        }
      ]
    },
    {
      id: 5,
      nome: "Belo Horizonte",
      descricao: "Capital mineira, moderna e vibrante, famosa pela culinária e vida cultural.",
      conteudo: "Belo Horizonte é a capital de Minas Gerais e uma metrópole que equilibra modernidade e tradição. Conhecida pelas suas padarias, botecos, os pastéis de Viaduto e uma cena cultural ativa com museus, parques e eventos.",
      estado: "Minas Gerais",
      distancia: "Capital",
      populacao: "~2.700.000 habitantes",
      destaque: true,
      imagem_principal: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Belo_Horizonte_%282%29.jpg",
      mapa: "https://maps.google.com/?q=Belo+Horizonte,MG",
      atracoes: [
        {
          id: 1,
          nome: "Pampulha",
          descricao: "Conjunto arquitetônico de Oscar Niemeyer às margens da Lagoa da Pampulha, patrimônio da UNESCO.",
          imagem: "https://media.istockphoto.com/id/1448228735/pt/foto/aerial-view-of-lagoa-da-pampulha-in-minas-gerais-belo-horizonte.jpg?s=612x612&w=0&k=20&c=Dj2IupKGSPZ0xD6q7PRtfq3EUdLOg7mUUmXy9t7RXJs="
        },
        {
          id: 2,
          nome: "Mercado Central",
          descricao: "Um dos maiores mercados cobertos do Brasil, com mais de 400 lojas e produtos típicos.",
          imagem: "https://portalbelohorizonte.com.br/sites/default/files/styles/img_interna_2/public/arquivos/informacoes-da-cidade/2021-07/mercadocentral-imperdivel.jpg?h=b69e0e0e&itok=ERMaPbhM"
        },
        {
          id: 3,
          nome: "Parque Municipal",
          descricao: "O pulmão verde de BH, com lago, pontes e muito verde no coração da cidade.",
          imagem: "https://minasgerais.com.br/imagens/atracoes/1638811447XmhidRQOY5.jpg"
        }
      ]
    },
    {
      id: 6,
      nome: "Brumadinho",
      descricao: "Cidade mineira famosa mundialmente pelo Instituto Inhotim e pelo turismo de natureza.",
      conteudo: "Brumadinho se destaca como um dos maiores polos culturais do Brasil. A cidade abriga o Instituto Inhotim, o maior museu a céu aberto do mundo, e atrai visitantes de todas as partes pelo seu acervo de arte contemporânea, rica culinária mineira e o exuberante turismo rural e ecológico na Serra do Rola-Moça.",
      estado: "Minas Gerais",
      distancia: "~60km de BH",
      populacao: "~39.000 habitantes",
      destaque: true,
      imagem_principal: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Brumadinho_MG_Brasil_-_Portalda_Cidade_-_panoramio.jpg",
      mapa: "https://maps.google.com/?q=Brumadinho,MG",
      atracoes: [
        {
          id: 1,
          nome: "Museu Inhotim",
          descricao: "O maior museu a céu aberto da América Latina e sede de um dos acervos de arte contemporânea mais importantes do mundo..",
          imagem: "https://cdn.assets-casacor.tec.br/file/casacor-images-news/2020/10/inhotim-vista-aerea-reabertura.webp"
        },
        {
          id: 2,
          nome: "Parque Estadual da Serra do Rola-Moça",
          descricao: "Uma das áreas verdes mais importantes de Minas Gerais, funcionando como divisor de águas das bacias dos rios das Velhas e Paraopeba.",
          imagem: "https://www.agenciaminas.mg.gov.br/system/news/images/000/128/661/original/Manancial_Catarina_%282%29.jpg?1767638865"
        },
        {
          id: 3,
          nome: "Memorial Brumadinho",
          descricao: "Um espaço monumental construído para homenagear as 272 vítimas do rompimento da barragem da Vale ocorrido em 2019.",
          imagem: "https://bienaldearquitetura.org.br/wp-content/uploads/2025/09/MemorialBrumadinho_GustavoPennaArquitetosAssociados1-Diana-Penna.jpg"
        }
      ]
    }
  ]
};

//funções pro html

function montarCarrossel() {
  const destaques = dados.cidades.filter(c => c.destaque);
  const inner = document.getElementById("carrossel-inner");
  if (!inner) return;

  destaques.forEach((cidade, index) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (index === 0 ? " active" : "");
    item.innerHTML = `
      <img src="${cidade.imagem_principal}" class="d-block w-100" alt="${cidade.nome}" style="height:420px; object-fit:cover;">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
        <h5>${cidade.nome}</h5>
        <p>${cidade.descricao}</p>
        <a href="detalhe.html?id=${cidade.id}" class="btn btn-sm btn-light">Ver detalhes</a>
      </div>
    `;
    inner.appendChild(item);
  });
}

function montarCards() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  dados.cidades.forEach(cidade => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    const visitados =
  JSON.parse(localStorage.getItem("visitados")) || [];

const visitado = visitados.includes(cidade.id);
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${cidade.imagem_principal}" class="card-img-top" alt="${cidade.nome}" style="height:200px; object-fit:cover;">
        <div class="card-body">
          <h5 class="card-title">${cidade.nome}</h5>
          <p class="card-text">${cidade.descricao}</p>
        </div>
        <div class="card-footer">
  <a href="detalhe.html?id=${cidade.id}" class="btn btn-success w-100 mb-2">
    Ver detalhes
  </a>

  <button
    class="btn btn-outline-primary w-100"
    onclick="marcarVisitado(${cidade.id}, this)">
    ❌ Não visitado
  </button>
</div>
      </div>
    `;
    container.appendChild(col);
  });
}


// detalhe.HTML - funções


function montarDetalhe() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const cidade = dados.cidades.find(c => c.id === id);

  if (!cidade) {
    document.getElementById("detalhe-container").innerHTML = "<p class='text-danger'>Cidade não encontrada.</p>";
    return;
  }

  // Título da página
  document.title = cidade.nome + " - Explora Minas";

  // 1: informações gerais
  const info = document.getElementById("detalhe-info");
  if (info) {
    info.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <img src="${cidade.imagem_principal}" class="img-fluid rounded shadow" alt="${cidade.nome}">
        </div>
        <div class="col-md-6">
          <h2>${cidade.nome}</h2>
          <p class="text-muted">${cidade.estado}</p>
          <p>${cidade.conteudo}</p>
          <ul class="list-group mb-3">
            <li class="list-group-item"><strong>📍 Distância:</strong> ${cidade.distancia}</li>
            <li class="list-group-item"><strong>👥 População:</strong> ${cidade.populacao}</li>
            <li class="list-group-item"><strong>🏆 Destaque:</strong> ${cidade.destaque ? "Sim" : "Não"}</li>
          </ul>
          <a href="${cidade.mapa}" target="_blank" class="btn btn-primary">Ver no mapa 📍</a>
          <a href="index.html" class="btn btn-outline-secondary ms-2">← Voltar</a>
        </div>
      </div>
    `;
  }

  // 2: atrações (fotos)
  const atracoes = document.getElementById("atracoes-container");
  if (atracoes) {
    cidade.atracoes.forEach(atracao => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${atracao.imagem}" class="card-img-top" alt="${atracao.nome}" style="height:200px; object-fit:cover;"
            onerror="this.src='https://via.placeholder.com/400x200?text=Foto+indispon%C3%ADvel'">
          <div class="card-body">
            <h6 class="card-title">${atracao.nome}</h6>
            <p class="card-text text-muted">${atracao.descricao}</p>
          </div>
        </div>
      `;
      atracoes.appendChild(col);
    });
  }
}

// Inicialização
function marcarVisitado(id, botao) {
  const visitados =
    JSON.parse(localStorage.getItem("visitados")) || [];

  if (visitados.includes(id)) {
    const novoArray = visitados.filter(item => item !== id);
    localStorage.setItem("visitados", JSON.stringify(novoArray));

    botao.innerHTML = "❌ Ainda não visitado";
    botao.classList.remove("btn-success");
    botao.classList.add("btn-outline-primary");
  }
  else {
    visitados.push(id);
    localStorage.setItem("visitados", JSON.stringify(visitados));

    botao.innerHTML = "✅ Visitado";
    botao.classList.remove("btn-outline-primary");
    botao.classList.add("btn-success");
  }
}

function initPagina() {
  if (document.getElementById("carrossel-inner")) montarCarrossel();
  if (document.getElementById("cards-container")) montarCards();
  if (document.getElementById("detalhe-container")) montarDetalhe();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPagina);
} else {
  setTimeout(initPagina, 0);
}
