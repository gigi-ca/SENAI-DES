const db = require("../data/connection");

const listarAlunos = async (req, res) => {
    const lista = await db.query("SELECT * FROM alunos;");

    res.json(lista[0]).end();
}

const cadastrarAluno = async (req, res) => {
    const { nome, turma } = req.body;

    const novo = await db.query("INSERT INTO alunos VALUES(DEFAULT, ?, ?)", [nome, turma]);

    const aluno = {
        id: novo[0].insertId,
        nome: nome, 
        turma: turma
    };

    res.status(201).json(aluno).end();
}

const excluirAluno = async (req, res) => {
    const id = req.params.id;

    try { 
        await db.query("DELETE FROM alunos WHERE id = ?", [id]);

        res.status(200).end();
    }catch (error) {
        const err = { msg:"" };

        if(error.errno === 1451) err.msg = "O aluno não pode ser removido!!";

        res.status(500).json(err).end();
    }
}

const atualizarAluno = async (req, res) => {
    const id = req.params.id;

    const { nome, turma } = req.body;

    try {
        const update = await db.query("UPDATE alunos SET nome = ?, turma = ? WHERE id = ?", [nome, turma, id]);

        const info = { msg:"" };

        if(update[0].affectedRows === 1) {
            info.msg = "Aluno atualizado";
        }
        else if(update[0].affectedRows === 0) {
            info.msg = "O aluno não foi encontrado";
        }

        res.status(200).json(info).end();
    }catch (error) {
        res.status(500).json(error).end();
    }
}

module.exports = {
    listarAlunos,
    cadastrarAluno,
    excluirAluno,
    atualizarAluno
}