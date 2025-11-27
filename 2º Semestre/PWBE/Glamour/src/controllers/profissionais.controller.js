const db = require("../data/connection");

const listarProfissionais = async (req, res) => {
    const lista = await db.query("SELECT * FROM profissionais;");

    res.json(lista[0]).end();
}

const buscarProfissional = async (req, res) => {
    const id = req.params.id;

    const profissional = await db.query("SELECT * FROM profissionais WHERE id = ?", [id]);

    res.json(profissional[0][0]).end();
}

const cadastrarProfissional = async (req, res) => {
    const { nome, email, especialidade, telefone, status, endereco, senha } = req.body;

    const crypto = require("crypto");
    const senhahash = crypto.createHash("md5").update(senha).digest("hex");

    const novo = await db.query(
        "INSERT INTO profissionais VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?)",
        [nome, email, especialidade, telefone, status, endereco, senhahash]
    );

    const profissional = {
        id: novo[0].insertId,
        nome: nome,
        email: email,
        especialidade: especialidade,
        telefone: telefone,
        status: status,
        endereco: endereco
    }

    res.status(201).json(profissional).end();
}

const excluirProfissional = async (req, res) => {
    const id = req.params.id;

    try {
        await db.query("DELETE FROM profissionais WHERE id = ?", [id]);

        res.status(200).end();
    } catch (error) {
        const err = { msg: "" };

        if (error.errno === 1451) err.msg = "Profissional não pode ser excluído!";

        res.status(500).json(err).end();
    }
}

const atualizarProfissional = async (req, res) => {
    const id = req.params.id;

    const { nome, email, telefone, especialidade, status, endereco } = req.body;

    try {
        const update = await db.query(
            "UPDATE profissionais SET nome = ?, email = ?, telefone = ?, especialidade = ?, status = ?, endereco = ? WHERE id = ?",
            [nome, email, telefone, especialidade, status, endereco, id]
        );

        const info = { msg:"" };

        if(update[0].affectedRows === 1){
            info.msg = "Profissional atualizado";
          }
          else if(update[0].affectedRows === 0) {
            info.msg = "Profissional não encontrado" ;
          }
        res.status(200).json(info).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
}

module.exports = {
    listarProfissionais,
    buscarProfissional,
    cadastrarProfissional,
    excluirProfissional,
    atualizarProfissional
}