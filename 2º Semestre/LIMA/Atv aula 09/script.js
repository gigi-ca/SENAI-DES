const content = document.querySelector(".content");
const box = document.querySelector(".box");
const alunos = [
    { 
        nome:"Juliana Ferreira",
        turma:"6º A",
        nota1:4.5,
        nota2:9,
        nota3:5
    },
    { 
        nome:"Micaelly Junqueira",
        turma:"6º A",
        nota1:10,
        nota2:6,
        nota3:9.5
    },
    { 
        nome:"João Vitor Vieira",
        turma:"6º A",
        nota1:4,
        nota2:5,
        nota3:10
    }
];

alunos.forEach((aluno) =>{
    let novocartao = box.cloneNode(true); 

    novocartao.querySelector("#nome").innerHTML = aluno.nome;
    novocartao.querySelector("#turma").innerHTML = aluno.turma;
    novocartao.querySelector("#nota1").innerHTML = "Nota 1:" + aluno.nota1;
    novocartao.querySelector("#nota2").innerHTML = "Nota 2:" + aluno.nota2;
    novocartao.querySelector("#nota3").innerHTML = "Nota 3:" + aluno.nota3;
    
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    novocartao.querySelector("#media").innerHTML = "Média: " + media.toFixed(2);

    if(media >= 7){
        novocartao.style.backgroundColor = "#439b31ff";
    } else {
        novocartao.style.backgroundColor = "#b61d1dff";
    }

    
    content.appendChild(novocartao);

});

const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
    content.childNodes.forEach((node) => {
        let conteudo = node.innerHTML;
        if(conteudo) {
            conteudo = node.querySelector("#nome").innerHTML; 
            if(conteudo.toLowerCase().includes(busca.value.toLowerCase())){
                node.style.display = "block";
            }else{
                node.style.display = "none";
            }
        }
    });
});