const db = require("../data/connection");

const listarAgendamentos = async (req, res) => {
    const lista = await db.query("SELECT * FROM agendamentos;");

    res.json(lista[0]).end();
}

const buscarAgendamento = async (req, res) => {
    const id = req.params.id;

    const agendamento = await db.query(
        "SELECT * FROM agendamentos WHERE id = ?",
        [id]
    );

    res.json(agendamento[0][0]).end();
}

const cadastrarAgendamento = async (req, res) => {
    const { id_profissional, id_cliente, id_servico, data, status } = req.body;

    const novo = await db.query(
        "INSERT INTO agendamentos VALUES (DEFAULT, ?, ?, ?, ?, ?)",
        [id_profissional, id_cliente, id_servico, data, status]
    );

    const agendamento = {
        id: novo[0].insertId,
        id_profissional: id_profissional,
        id_cliente: id_cliente,
        id_servico: id_servico,
        data: data,
        status: status
    };

    res.status(201).json(agendamento).end();
}

const excluirAgendamento = async (req, res) => {
    const id = req.params.id;

    try {
        await db.query("DELETE FROM agendamentos WHERE id = ?", [id]);
        res.status(200).end();
    } catch (error) {
        const err = { msg: "" };

        if (error.errno === 1451) err.msg = "Agendamento não pode ser removido!";

        res.status(500).json(err).end();
    }
}

const atualizarAgendamento = async (req, res) => {
    const id = req.params.id;

    const { id_profissional, id_cliente, id_servico, data, status } = req.body;

    try {
        const update = await db.query(
            "UPDATE agendamentos SET id_profissional = ?, id_cliente = ?, id_servico = ?, data = ?, status = ? WHERE id = ?",
            [id_profissional, id_cliente, id_servico, data, status, id]
        );

        const info = { msg: "" };

          if(update[0].affectedRows === 1){
            info.msg = "Agendamento atualizado";
          }
          else if(update[0].affectedRows === 0) {
            info.msg = "Agendamento não encontrado";
          }

        res.status(200).json(info).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
}

module.exports = {
    listarAgendamentos,
    buscarAgendamento,
    cadastrarAgendamento,
    excluirAgendamento,
    atualizarAgendamento
}