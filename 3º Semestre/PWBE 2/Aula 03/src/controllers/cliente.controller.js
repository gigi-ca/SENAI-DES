const prisma = require("../data/prisma");

const novoCliente = async (req, res) => {
    const cliente = req.body;

    const ncliente = await prisma.clientes.create({
        data: cliente
    });

    res.json(ncliente).status(201).end();
};

const listarCliente = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    res.json(clientes).status(200).end();
};

const buscarCliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.findUnique({
        where: { id },
        include: {
            carros: true
        }
    });

    res.json(cliente).status(200).end();
};

const excluirCliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.delete({
        where: { id }
    });

    res.json(cliente).status(200).end();
};

const atualizarCliente = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const cliente = await prisma.clientes.update({
        where: { id },
        data: dados
    });

    res.json(cliente).status(200).end();
};

module.exports = {
    novoCliente,
    listarCliente,
    buscarCliente,
    excluirCliente,
    atualizarCliente
};