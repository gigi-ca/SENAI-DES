const reservas = require("../data/reservas.data");

const listar = (req, res) => {
    res.send(reservas).end();
};

const cadastrar = (req, res) => {
    const data = req.body;

    reservas.push(data);
    res.status(201).send("Reserva cadastrada com sucesso!").end();
};

module.exports = {
    listar,
    cadastrar
}