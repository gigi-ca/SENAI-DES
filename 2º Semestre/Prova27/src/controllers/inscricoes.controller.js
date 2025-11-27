const db = require("../data/connection");

const listarInscricoes = async (req, res) => {
    const lista = await db.query("SELECT *FROM inscricoes;");

    res.json(lista[0]).end();
}

const cadastrarInscricao = async (req, res) => {
    const { data_inscricao, id_aluno, id_oficina } = req.body;

    const novo = await db.query("INSERT INTO inscricoes VALUES(DEFAULT, ?, ?, ?)", [ data_inscricao, id_aluno, id_oficina]);

    const inscricao = {
        id: novo[0].insertId,
        data_inscricao: data_inscricao,
        id_aluno: id_aluno,
        id_oficina: id_oficina
    };

    res.status(201).json(inscricao).end();
}

const excluirInscricao = async (req, res) => {
    const id = req.params.id;

    try {
        await db.query("DELET FROM inscricoes WHERER id = ?", [id]);

        res.status(200).end();
    }catch (error) {
        const err = { msg:"" };

        if(error.errno === 1451) err.msg = "A inscrição não pode ser excluida!";

        res.status(500).json(err).end();
    }
}

const atualizarInscricao = async (req, res) => {
    const id = req.params.id;

    const { data_inscricao, id_aluno, id_oficina } = req.body;

    try {
        const update = await db.query("UPDATE inscricoes SET data_inscricao = ?, id_aluno = ?, id_oficina = ? WHERE id = ?", [ data_inscricao, id_aluno, id_oficina, id]);

        const info = { msg:"" };
        
        if(update[0].affectedRows === 1) {
            info.msg = "Inscrição atualizada!!";
        }
        else if(update[0].affectedRows === 0) {
            info.msg = "Inscrição não encontrada!";
        }

        res.status(200).json(info).end();
    }catch (error) {
        res.status(500).json(error).end();
    }
}

module.exports = {
    listarInscricoes,
    cadastrarInscricao, 
    excluirInscricao, 
    atualizarInscricao
}