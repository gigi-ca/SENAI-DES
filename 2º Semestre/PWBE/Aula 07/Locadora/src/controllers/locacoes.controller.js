const db = require("../data/connection");

const registrarLocacao = async (req, res) => {
    const {cliente_id, filme_id, data_locacao, status, preco} = req.body

    const novaLocacao = await db.query("INSERT INTO locacoes VALUES (DEFAULT, ?, ?, ?, ?, ?)", [cliente_id, filme_id, data_locacao, status, preco]);

    const locacao = {
        id: novaLocacao[0].insertId,
        cliente_id: cliente_id,
        filme_id: filme_id,
        data_locacao: data_locacao,
        status: status,
        preco: preco
    }

    res.json(locacao).status(201).end();
}

const buscarLocacao = async (req, res) => {
    const idLocacao = req.params.id;

    const locacao = await db.query("SELECT * FROM locacoes WHERE id = " + idLocacao);

    res.json(locacao[0][0]).end();
}

const excluirLocacao = async (req, res) => {
    const id = req.params.id;

    try {
        const remove = await db.query("DELETE FROM locacoes WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg:""};

        if(error.errno === 1064) {
            err.msg = "Locação ja registrada";
        }

        res.status(500).json(err).end();
    }
}

const listarLocacoes = async (req, res) => {
    const lista = await db.query("SELECT * FROM locacoes;");

    res.json(lista[0]).end();
}

const listarLocacoesporIDcliente = async (req, res) => {
    const cliente_id = req.params.cliente_id;

    const lista = await db.query("SELECT * FROM locacoes WHERE cliente_id = ?", [cliente_id]);

    res.json(lista[0]).end();
}

const listarLocacoesporStatus = async (req, res) => {
    const status = req.params.status;

    const lista = await db.query("SELECT * FROM locacoes WHERE status = ?", [status]);

    res.json(lista[0]).end();
}

const totalFaturamento = async (req, res) =>{
    const total = await db.query("SELECT SUM(preco) AS total FROM locacoes WHERE status = 'ENTREGUE'");
    res.json(total[0][0]).end();

}

module.exports = {
    registrarLocacao,
    buscarLocacao,
    excluirLocacao,
    listarLocacoes,
    listarLocacoesporIDcliente,
    listarLocacoesporStatus,
    totalFaturamento
}