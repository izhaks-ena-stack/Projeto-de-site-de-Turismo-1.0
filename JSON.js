const cards = [
  {
    id: 1,
    titulo: "Ouro Preto",
    descricao: "Ouro Preto é um tesouro da época colonial brasileira, famosa por ser a primeira cidade do país declarada Patrimônio Cultural da Humanidade pela UNESCO em 1980.",
    topics: ["96km, a sudeste de Belo Horizonte.", "Cidade movida por repúblicas estudantis e tradições da UFOP.", "É possível visitar minas antigas de ouro."],
    imagens: ["https://www.segueviagem.com.br/wp-content/uploads/2020/09/shutterstock_452390755-scaled.jpg", "imagem1-2.jpg", "imagem1-3.jpg"],
    localizacao: "https://maps.app.goo.gl/3Vu9swvpx3ncmqJi7",
    corFundo: "#FF6B6B"
  },
  {
    id: 2,
    titulo: "Card 2",
    descricao: "Descrição do segundo card",
    topics: ["Tópico 1", "Tópico 2", "Tópico 3"],
    imagens: ["imagem2.jpg", "imagem2-2.jpg", "imagem2-3.jpg"],
    localizacao: "https://maps.google.com/?q=location2",
    corFundo: "#4ECDC4"
  },
  {
    id: 3,
    titulo: "Card 3",
    descricao: "Descrição do terceiro card",
    topics: ["Tópico A", "Tópico B", "Tópico C"],
    imagens: ["imagem3.jpg", "imagem3-2.jpg", "imagem3-3.jpg"],
    localizacao: "https://maps.google.com/?q=location3",
    corFundo: "#45B7D1"
  }
];

function renderCards() {
  const container = document.getElementById("cards-container");
  
  cards.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.style.backgroundColor = card.corFundo;
    cardElement.innerHTML = `
      <img src="${card.imagem}" alt="${card.titulo}">
      <h3>${card.titulo}</h3>
      <p>${card.descricao}</p>
    `;
    container.appendChild(cardElement);
  });
}

// Chamar ao carregar a página
document.addEventListener("DOMContentLoaded", renderCards);