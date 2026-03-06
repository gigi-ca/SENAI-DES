const modalCli = document.querySelector("#modalCli")
var filmes = JSON.parse(localStorage.getItem("filmes")) || [];

renderizarTabela();

function salvarLocal(){
    localStorage.setItem("filmes", JSON.stringify(filmes));
    window.location.reload();
}

function abrirModal(){
    modalCli.style.display="block";
}

function fecharModal(){
    modalCli.style.display="none";
}
const formCli = document.querySelector("#formCli");
formCli.addEventListener("submit", e => {
    e.preventDefault();
    const obj = {
        capa: formCli.capa.value,
        titulo: formCli.titulo.value,
        descricao: formCli.descricao.value,
        tempo: formCli.tempo.value,
        ano: formCli.ano.value,
        genero: formCli.genero.value,
        produtora: formCli.produtora.value
    }
    filmes.push(obj);
    formCli.reset();
    salvarLocal();
 
});

function renderizarTabela(){
    const corpo = document.querySelector("#dados");
    corpo.innerHTML = "";
    filmes.forEach((c, i) =>{
        corpo.innerHTML += `
        <tr>
        <td><img src="${c.capa}" width="80"></td>
        <td>${c.titulo}</td>
        <td>${c.descricao}</td>
        <td>${c.tempo}</td>
        <td>${c.ano}</td>
        <td>${c.genero}</td>
        <td>${c.produtora}</td>
        <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    })
}

function filtrarGenero(){
    const input = document.getElementById("pesquisa").value.toLowerCase();
    const linhas = document.querySelectorAll("#dados tr");

    linhas.forEach(linha => {
        const genero = linha.children[5].textContent.toLowerCase();

        if(genero.includes(input)){
            linha.style.display = "";
        }else{
            linha.style.display = "none";
        }
    });
}

function excluir(indice){
    filmes.splice(indice,1);
    salvarLocal();
}