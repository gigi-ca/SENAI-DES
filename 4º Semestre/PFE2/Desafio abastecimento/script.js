// Lista dos abastecimentos
let abastecimentos = [];


// Pegar os dados salvos no navegador
let dadosSalvos = localStorage.getItem("abastecimentos");

if (dadosSalvos) {
    abastecimentos = JSON.parse(dadosSalvos);
}


// Elementos da página
let modal = document.getElementById("modal");
let lista = document.getElementById("lista-abastecimentos");
let mensagemVazia = document.getElementById("mensagem-vazia");


// =============================
// ABRIR JANELA
// =============================

document.getElementById("botao-adicionar").onclick = function () {

    document.getElementById("formulario").reset();

    document.getElementById("id").value = "";

    document.getElementById("titulo-modal").innerText =
        "Novo abastecimento";

    document.getElementById("erro").innerText = "";

    modal.classList.remove("escondido");
};


// =============================
// FECHAR JANELA
// =============================

function fecharModal() {

    modal.classList.add("escondido");

}

document.getElementById("botao-fechar").onclick =
    fecharModal;

document.getElementById("botao-cancelar").onclick =
    fecharModal;


// =============================
// SALVAR ABASTECIMENTO
// =============================

document.getElementById("formulario").onsubmit =
    function (event) {

        event.preventDefault();


        let id = document.getElementById("id").value;

        let data = document.getElementById("data").value;

        let combustivel =
            document.getElementById("combustivel").value;

        let litros =
            Number(document.getElementById("litros").value);

        let valor =
            Number(document.getElementById("valor").value);

        let quilometragem =
            Number(document.getElementById("quilometragem").value);


        // Verificar se os campos foram preenchidos

        if (
            data == "" ||
            combustivel == "" ||
            litros <= 0 ||
            valor <= 0 ||
            quilometragem < 0
        ) {

            document.getElementById("erro").innerText =
                "Preencha todos os campos corretamente.";

            return;
        }


        // Criar o abastecimento

        let abastecimento = {

            id: id,

            data: data,

            combustivel: combustivel,

            litros: litros,

            valor_pago: valor,

            quilometragem: quilometragem

        };


        // Se tiver ID, significa que está editando

        if (id != "") {

            for (let i = 0; i < abastecimentos.length; i++) {

                if (abastecimentos[i].id == id) {

                    abastecimentos[i] =
                        abastecimento;

                }

            }

        }

        // Se não tiver ID, é um novo abastecimento

        else {

            abastecimento.id = Date.now();

            abastecimentos.push(
                abastecimento
            );

        }


        salvar();

        fecharModal();

        atualizarPagina();

    };


// =============================
// SALVAR NO NAVEGADOR
// =============================

function salvar() {

    localStorage.setItem(
        "abastecimentos",
        JSON.stringify(abastecimentos)
    );

}


// =============================
// MOSTRAR ABASTECIMENTOS
// =============================

function mostrarAbastecimentos() {

    lista.innerHTML = "";


    if (abastecimentos.length == 0) {

        mensagemVazia.classList.remove(
            "escondido"
        );

        return;

    }


    mensagemVazia.classList.add(
        "escondido"
    );


    for (
        let i = abastecimentos.length - 1;
        i >= 0;
        i--
    ) {

        let item = abastecimentos[i];


        let preco =
            item.valor_pago / item.litros;


        let div =
            document.createElement("div");


        div.className = "item";


        div.innerHTML = `

            <div>

                <h3>
                    ${item.combustivel}
                </h3>

                <div class="detalhes">

                    ${formatarData(item.data)}
                    -
                    ${item.litros.toFixed(2)} litros
                    -
                    ${item.quilometragem} km

                </div>

            </div>


            <div class="valor">

                <strong>
                    R$ ${item.valor_pago.toFixed(2)}
                </strong>

                <button class="botao-excluir">

                    🗑️

                </button>

            </div>

        `;


        // Clicar no item para editar

        div.onclick = function () {

            editarAbastecimento(item.id);

        };


        // Botão excluir

        div.querySelector(".botao-excluir").onclick =
            function (event) {

                event.stopPropagation();

                excluirAbastecimento(item.id);

            };


        lista.appendChild(div);

    }

}


// =============================
// FORMATAR DATA
// =============================

function formatarData(data) {

    let partes = data.split("-");

    return (
        partes[2] +
        "/" +
        partes[1] +
        "/" +
        partes[0]
    );

}


// =============================
// EXCLUIR
// =============================

function excluirAbastecimento(id) {

    let confirmar =
        confirm(
            "Deseja excluir este abastecimento?"
        );


    if (confirmar == false) {

        return;

    }


    for (let i = 0; i < abastecimentos.length; i++) {

        if (abastecimentos[i].id == id) {

            abastecimentos.splice(i, 1);

            break;

        }

    }


    salvar();

    atualizarPagina();

}


// =============================
// EDITAR
// =============================

function editarAbastecimento(id) {

    let item = null;


    for (let i = 0; i < abastecimentos.length; i++) {

        if (abastecimentos[i].id == id) {

            item = abastecimentos[i];

        }

    }


    if (item == null) {

        return;

    }


    document.getElementById("id").value =
        item.id;

    document.getElementById("data").value =
        item.data;

    document.getElementById("combustivel").value =
        item.combustivel;

    document.getElementById("litros").value =
        item.litros;

    document.getElementById("valor").value =
        item.valor_pago;

    document.getElementById("quilometragem").value =
        item.quilometragem;


    document.getElementById("titulo-modal").innerText =
        "Alterar abastecimento";


    document.getElementById("erro").innerText = "";


    modal.classList.remove("escondido");

}


// =============================
// PREÇO MÉDIO POR LITRO
// =============================

function calcularPrecoMedio() {

    if (abastecimentos.length == 0) {

        return 0;

    }


    let totalLitros = 0;

    let totalValor = 0;


    for (let i = 0; i < abastecimentos.length; i++) {

        totalLitros +=
            abastecimentos[i].litros;

        totalValor +=
            abastecimentos[i].valor_pago;

    }


    return totalValor / totalLitros;

}


// =============================
// CONSUMO MÉDIO
// =============================

function calcularConsumoMedio() {

    if (abastecimentos.length < 2) {

        return 0;

    }


    let kmTotal = 0;

    let litrosTotal = 0;


    for (let i = 1; i < abastecimentos.length; i++) {

        let km =
            abastecimentos[i].quilometragem -
            abastecimentos[i - 1].quilometragem;


        if (km > 0) {

            kmTotal += km;

            litrosTotal +=
                abastecimentos[i].litros;

        }

    }


    if (litrosTotal == 0) {

        return 0;

    }


    return kmTotal / litrosTotal;

}


// =============================
// ATUALIZAR INFORMAÇÕES
// =============================

function atualizarInformacoes() {

    let preco =
        calcularPrecoMedio();

    let consumo =
        calcularConsumoMedio();


    document.getElementById("preco-medio").innerText =
        "R$ " + preco.toFixed(2);


    document.getElementById("consumo-medio").innerText =
        consumo.toFixed(2) + " km/L";


    document.getElementById("total-abastecimentos").innerText =
        abastecimentos.length;

}


// =============================
// GRÁFICO
// =============================

function criarGrafico() {

    let canvas =
        document.getElementById("grafico");

    let desenho =
        canvas.getContext("2d");


    desenho.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    if (abastecimentos.length == 0) {

        return;

    }


    // Mostra até 8 abastecimentos

    let inicio = 0;

    if (abastecimentos.length > 8) {

        inicio =
            abastecimentos.length - 8;

    }


    let maior = 0;


    // Descobrir o maior valor

    for (
        let i = inicio;
        i < abastecimentos.length;
        i++
    ) {

        if (
            abastecimentos[i].valor_pago >
            maior
        ) {

            maior =
                abastecimentos[i].valor_pago;

        }

        if (
            abastecimentos[i].litros >
            maior
        ) {

            maior =
                abastecimentos[i].litros;

        }

    }


    // Desenhar as barras

    for (
        let i = inicio;
        i < abastecimentos.length;
        i++
    ) {

        let numero = i - inicio;

        let x =
            30 + numero * 55;


        // Litros

        let alturaLitros =
            (abastecimentos[i].litros / maior) * 200;


        desenho.fillStyle =
            "#5b5ce2";


        desenho.fillRect(
            x,
            260 - alturaLitros,
            20,
            alturaLitros
        );


        // Valor pago

        let alturaValor =
            (abastecimentos[i].valor_pago / maior) * 200;


        desenho.fillStyle =
            "#f0a34a";


        desenho.fillRect(
            x + 23,
            260 - alturaValor,
            20,
            alturaValor
        );

    }

}


// =============================
// ATUALIZAR TUDO
// =============================

function atualizarPagina() {

    mostrarAbastecimentos();

    atualizarInformacoes();

    criarGrafico();

}


// =============================
// INICIAR
// =============================

atualizarPagina();