const db = require("../data/connection");

const listarServicos = async (req, res) => {
    const lista = await db.query("SELECT * FROM servicos;");

    res.json(lista[0]).end();
}

const buscarServicos = async (req, res) => {
    const id = req.params.id;

    const servico = await db.query("SELECT * FROM servicos WHERE id = ?", [id]);

    res.json(servico[0][0]).end();
}

const cadastrarServico = async (req, res) => {
    const { nome, preco, duracao } = req.body;

    const novo = await db.query(
        "INSERT INTO servicos VALUES (DEFAULT, ?, ?, ?)",
        [nome, preco, duracao]
    );

    const servico = {
        id: novo[0].insertId,
        nome: nome,
        preco: preco,
        duracao: duracao
    }

    res.status(201).json(servico).end();
}

const excluirServico = async (req, res) => {
    const id = req.params.id;

    try {
        await db.query("DELETE FROM servicos WHERE id = ?", [id]);

        res.status(200).end();
    } catch (error) {
        const err = { msg: "" };

        if (error.errno === 1451) err.msg = "Serviço não pode ser removido!";

        res.status(500).json(err).end();
    }
}

const atualizarServico = async (req, res) => {
    const id = req.params.id;

    const { nome, preco, duracao } = req.body;

    try {
        const update = await db.query(
            "UPDATE servicos SET nome = ?, preco = ?, duracao = ? WHERE id = ?",
            [nome, preco, duracao, id]
        );

        const info = { msg:"" };

        if(update[0].affectedRows === 1){
            info.msg = "Serviço atualizado";
          }
          else if(update[0].affectedRows === 0) {
            info.msg = "Serviço não encontrado";
          }

        res.status(200).json(info).end();
    } catch (error) {
        res.status(500).end();
    }
}

module.exports = {
    listarServicos,
    buscarServicos,
    cadastrarServico,
    excluirServico,
    atualizarServico
}