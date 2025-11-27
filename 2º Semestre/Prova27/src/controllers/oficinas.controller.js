const db = require("../data/connection");

const listarOficinas = async (req, res) => {
    const lista = await db.query("SELECT * FROM oficinas;");

    res.json(lista[0]).end();
}

const cadastrarOficina = async (req, res) => {
    const { nome, categoria, vagas } = req.body;

    const novo = await db.query("INSERT INTO oficinas VALUES(DEFAULT, ?, ?, ?)", [nome, categoria, vagas]);

    const oficina = {
        id: novo[0].insertId,
        nome: nome,
        categoria: categoria,
        vagas: vagas
    };

    res.status(201).json(oficina).end();
}

const excluirOficina = async (req, res) => {
    const id = req.params.id;

    try {
        await db.query("DELETE FROM oficinas WHERER id = ?", [id]);

        res.status(200).end();
    }catch (error) { 
        const err= { msg: "" };

        if(error.errno === 1451) err.msg = "Oficina não pode ser deletada!";

        res.status(500).json(err).end();
    }
}

const atualizarOficina = async (req, res) => {
    const id = req.params.id;

    const { nome, categoria, vagas } = req.body;

    try {
        const update = await db.query("UPDATE oficinas SET nome = ?, categoria = ?, vagas = ? WHERE id = ?", [ nome, categoria, vagas, id]);

        const info = { msg: ""};

        if(update[0].affectedRows === 1) {
            info.msg = "Oficina atualizada!!";
        }
        else if(update[0].affectedRows === 0) {
            info.msg = "Oficina não encontrada!";
        }

        res.status(200).json(info).end();
    }catch (error) {
        res.status(500).json(error).end();
    }
}

module.exports = {
    listarOficinas,
    cadastrarOficina,
    excluirOficina,
    atualizarOficina
}