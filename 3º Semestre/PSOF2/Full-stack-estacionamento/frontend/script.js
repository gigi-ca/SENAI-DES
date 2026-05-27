const API_AUTO = "http://localhost:3000/automovel";
const API_EST = "http://localhost:3000/estadia";

const formAuto = document.getElementById("formAutomovel");
const listaAuto = document.getElementById("listaAutomoveis");

const formEst = document.getElementById("formEstadia");
const listaEst = document.getElementById("listaEstadias");

let placaSendoEditada = null;
let estadiaEditando = null;

formAuto.addEventListener("submit", async (e) => {
    e.preventDefault();

    const automovel = {
        placa: document.getElementById("placa").value.trim(),
        proprietario: document.getElementById("proprietario").value.trim(),
        tipo: document.getElementById("tipo").value.trim(),
        modelo: document.getElementById("modelo").value.trim(),
        marca: document.getElementById("marca").value.trim(),
        cor: document.getElementById("cor").value.trim() || null,
        ano: document.getElementById("ano").value
            ? Number(document.getElementById("ano").value)
            : null,
        telefone: document.getElementById("telefone").value.trim()
    };

    let url = `${API_AUTO}/cadastrar`;
    let metodo = "POST";

    if (placaSendoEditada) {
        url = `${API_AUTO}/atualizar/${placaSendoEditada}`;
        metodo = "PUT";
    }

    try {
        const res = await fetch(url, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(automovel)
        });

        if (!res.ok) {
            throw new Error("Erro ao salvar veículo");
        }

        alert("Veículo salvo com sucesso!");

        placaSendoEditada = null;
        formAuto.reset();

        listarAutomoveis();

    } catch (err) {
    console.error("ERRO COMPLETO:", err);
    alert(err.message);
    }
});

async function listarAutomoveis() {

    try {

        const res = await fetch(`${API_AUTO}/listar`);

        if (!res.ok) {
            throw new Error("Erro ao listar veículos");
        }

        const dados = await res.json();

        listaAuto.innerHTML = "";

        dados.forEach(item => {

            listaAuto.innerHTML += `
                <tr>
                    <td>${item.placa || "-"}</td>
                    <td>${item.proprietario || "-"}</td>
                    <td>${item.modelo || "-"}</td>

                    <td>
                        <button onclick="prepararEdicaoAuto(
                            '${String(item.placa).replace(/'/g, "\\'")}',
                            '${String(item.proprietario).replace(/'/g, "\\'")}',
                            '${String(item.tipo).replace(/'/g, "\\'")}',
                            '${String(item.modelo).replace(/'/g, "\\'")}',
                            '${String(item.marca).replace(/'/g, "\\'")}',
                            '${String(item.cor || "").replace(/'/g, "\\'")}',
                            '${String(item.ano || "")}',
                            '${String(item.telefone).replace(/'/g, "\\'")}'
                        )">
                            Editar
                        </button>

                        <button onclick="excluirAuto('${item.placa}')">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
        });

    } catch (err) {
        console.error(err);
        alert("Erro ao listar veículos");
    }
}

function prepararEdicaoAuto(
    placa,
    proprietario,
    tipo,
    modelo,
    marca,
    cor,
    ano,
    telefone
) {

    placaSendoEditada = placa;

    document.getElementById("placa").value = placa;
    document.getElementById("proprietario").value = proprietario;
    document.getElementById("tipo").value = tipo;
    document.getElementById("modelo").value = modelo;
    document.getElementById("marca").value = marca;
    document.getElementById("cor").value = cor;
    document.getElementById("ano").value = ano;
    document.getElementById("telefone").value = telefone;
}

async function excluirAuto(placa) {

    const confirmar = confirm("Deseja excluir este veículo?");

    if (!confirmar) return;

    try {

        const res = await fetch(`${API_AUTO}/excluir/${placa}`, {
            method: "DELETE"
        });

        if (!res.ok) {
            throw new Error("Erro ao excluir veículo");
        }

        listarAutomoveis();

    } catch (err) {
        console.error(err);
        alert("Erro ao excluir veículo");
    }
}

formEst.addEventListener("submit", async (e) => {

    e.preventDefault();

    const estadia = {
        placa: document.getElementById("placaEstadia").value.trim(),

        valorHora: parseFloat(
            document
                .getElementById("valorHora")
                .value
                .replace(",", ".")
        )
    };

    try {

        let res;

        if (estadiaEditando) {

            res = await fetch(`${API_EST}/atualizar/${estadiaEditando}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(estadia)
            });

            estadiaEditando = null;

        } else {

            res = await fetch(`${API_EST}/cadastrar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(estadia)
            });
        }

        if (!res.ok) {
            throw new Error("Erro ao salvar estadia");
        }

        alert("Estadia salva com sucesso!");

        formEst.reset();

        listarEstadias();

    } catch (err) {
        console.error(err);
        alert("Erro ao salvar estadia");
    }
});

async function listarEstadias() {

    try {

        const res = await fetch(`${API_EST}/listar`);

        if (!res.ok) {
            throw new Error("Erro ao listar estadias");
        }

        const dados = await res.json();

        listaEst.innerHTML = "";

        dados.forEach(item => {

            listaEst.innerHTML += `
                <tr>
                    <td>${item.id}</td>

                    <td>${item.placa || "-"}</td>

                    <td>
                        ${item.entrada
                            ? new Date(item.entrada).toLocaleString()
                            : "-"}
                    </td>

                    <td>
                        ${item.saida
                            ? new Date(item.saida).toLocaleString()
                            : "Em aberto"}
                    </td>

                    <td>
                        ${item.valorTotal
                            ? "R$ " + Number(item.valorTotal).toFixed(2)
                            : "-"}
                    </td>

                    <td>

                        <button onclick="prepararEdicaoEstadia(
                            ${item.id},
                            '${String(item.placa).replace(/'/g, "\\'")}',
                            ${item.valorHora || 0}
                        )">
                            Editar
                        </button>

                        <button onclick="finalizar(${item.id})">
                            Finalizar
                        </button>

                        <button onclick="excluirEst(${item.id})">
                            Excluir
                        </button>

                    </td>
                </tr>
            `;
        });

    } catch (err) {
        console.error(err);
        alert("Erro ao listar estadias");
    }
}

function prepararEdicaoEstadia(id, placa, valorHora) {

    document.getElementById("placaEstadia").value = placa;

    document.getElementById("valorHora").value = valorHora;

    estadiaEditando = id;
}

async function finalizar(id) {

    try {

        const res = await fetch(`${API_EST}/atualizar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                saida: new Date()
            })
        });

        if (!res.ok) {
            throw new Error("Erro ao finalizar estadia");
        }

        listarEstadias();

    } catch (err) {
        console.error(err);
        alert("Erro ao finalizar estadia");
    }
}

async function excluirEst(id) {

    const confirmar = confirm("Deseja excluir esta estadia?");

    if (!confirmar) return;

    try {

        const res = await fetch(`${API_EST}/excluir/${id}`, {
            method: "DELETE"
        });

        if (!res.ok) {
            throw new Error("Erro ao excluir estadia");
        }

        listarEstadias();

    } catch (err) {
        console.error(err);
        alert("Erro ao excluir estadia");
    }
}

listarAutomoveis();
listarEstadias();