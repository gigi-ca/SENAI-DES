const lista = document.getElementById("listaCards");

const modal = document.getElementById("modal");
const modalDetalhes = document.getElementById("modalDetalhes");

const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fecharModal");
const fecharDetalhes = document.getElementById("fecharDetalhes");

const btnSalvar = document.getElementById("btnSalvar");
const tituloModal = document.getElementById("tituloModal");

const conteudo = document.getElementById("detalhesConteudo");
const btnEditar = document.getElementById("btnEditar");
const btnExcluir = document.getElementById("btnExcluir");

let editando = null;
let cardAtual = null;

abrirModal.onclick = () => {
  limpar();
  editando = null;
  modal.style.display = "block";
};

fecharModal.onclick = () => modal.style.display = "none";
fecharDetalhes.onclick = () => modalDetalhes.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
  if (e.target === modalDetalhes) modalDetalhes.style.display = "none";
};

btnSalvar.onclick = () => {
  const nome = nomeInput().value;
  const tipo = tipoInput().value;
  const preco = precoInput().value;
  const marca = marcaInput().value;
  const img = imagemInput().files[0];

  if (!nome || !tipo || !preco || !marca) {
    alert("Preencha tudo");
    return;
  }

  let imgURL = img ? URL.createObjectURL(img) : "";

  if (editando) {
    editando.querySelector(".nome").innerText = nome;
    editando.querySelector(".tipo").innerText = tipo;
    editando.querySelector(".preco").innerText = preco;
    editando.querySelector(".marca").innerText = marca;

    if (imgURL) editando.querySelector("img").src = imgURL;

    modal.style.display = "none";
    return;
  }

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3 class="nome">${nome}</h3>
    ${imgURL ? `<img src="${imgURL}">` : ""}
    <p class="tipo">${tipo}</p>
    <p class="marca">${marca}</p>
    <p class="preco">${preco}</p>
  `;

  card.onclick = () => abrirDetalhes(card);

  lista.appendChild(card);
  modal.style.display = "none";
  limpar();
};

function abrirDetalhes(card) {
  cardAtual = card;

  conteudo.innerHTML = card.innerHTML;

  modalDetalhes.style.display = "block";
}

btnEditar.onclick = () => {
  const nome = cardAtual.querySelector(".nome").innerText;
  const tipo = cardAtual.querySelector(".tipo").innerText;
  const preco = cardAtual.querySelector(".preco").innerText;
  const marca = cardAtual.querySelector(".marca").innerText;

  nomeInput().value = nome;
  tipoInput().value = tipo;
  precoInput().value = preco;
  marcaInput().value = marca;

  editando = cardAtual;

  modalDetalhes.style.display = "none";
  modal.style.display = "block";
};

btnExcluir.onclick = () => {
  cardAtual.remove();
  modalDetalhes.style.display = "none";
};

document.getElementById("pesquisa").addEventListener("input", (e) => {
  const v = e.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach(c => {
    c.style.display = c.innerText.toLowerCase().includes(v) ? "block" : "none";
  });
});

function nomeInput() { return document.getElementById("nome"); }
function tipoInput() { return document.getElementById("tipo"); }
function precoInput() { return document.getElementById("preco"); }
function marcaInput() { return document.getElementById("marca"); }
function imagemInput() { return document.getElementById("imagem"); }

function limpar() {
  nomeInput().value = "";
  tipoInput().value = "";
  precoInput().value = "";
  marcaInput().value = "";
  imagemInput().value = "";
}