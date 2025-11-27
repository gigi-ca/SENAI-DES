const db = require("../data/connection");

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes;");

    res.json(lista[0]).end();
}

const buscarClientes = async (req, res) => {
    const id = req.params.id;

    const cliente = await db.query("SELECT * FROM clientes WHERE id = ?", [id]);

    res.json(cliente[0][0]).end();
}

const cadastrarCliente = async (req, res) => {
    const { nome, email, telefone } = req.body;

    const novo = await db.query(
        "INSERT INTO clientes VALUES (DEFAULT, ?, ?, ?)",
        [nome, email, telefone]
    );

    const cliente = {
        id: novo[0].insertId,
        nome: nome,
        email: email,
        telefone: telefone
    }

    res.status(201).json(cliente).end();
}

const excluirCliente = async (req, res) => {
    const id = req.params.id;

    try {
        await db.query("DELETE FROM clientes WHERE id = ?", [id]);

        res.status(200).end();
    } catch (error) {

        const err = { msg: "" };

        if (error.errno === 1451) err.msg = "Cliente não pode ser excluído!";

        res.status(500).json(err).end();
    }
}

const atualizarCliente = async (req, res) => {
    const id = req.params.id;
    const { nome, email, telefone } = req.body;

    try {
        const update = await db.query(
            "UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?",
            [nome, email, telefone, id]
        );

        const info = { msg:"" };

        if(update[0].affectedRows === 1){
            info.msg = "Cliente atualizado";
          }
          else if(update[0].affectedRows === 0) {
            info.msg = "Cliente não encontrado" ;
          }

        res.status(200).json(info).end();
    } catch (error) {
        res.status(500).end();
    }
}

module.exports = {
    listarClientes,
    buscarClientes,
    cadastrarCliente,
    excluirCliente,
    atualizarCliente
}