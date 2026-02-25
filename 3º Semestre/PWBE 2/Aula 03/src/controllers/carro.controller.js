const prisma = require("../data/prisma");

const novoCarro = async (req, res) => {
    const carro = req.body;

    const ncarro  = await prisma.carros.create({
        data: carro
    });

    res.json(ncarro).status(201).end();
};

const listarCarros = async (req, res) => {
    const carros = await prisma.carros.findMany();

    res.json(carros).status(200).end();
};

const buscarCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.findUnique({
        where: { id },
        include: {
            clientes: true
        }
    });

    res.json(carro).status(200).end();
};

const excluirCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.delete({
        where: { id }
    });

    res.json(carro).status(200).end();
};

const atualizarCarro = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const carro = await prisma.carros.update({
        where: { id },
        data: dados
    });

    res.json(carro).status(200).end();
};

module.exports = {
    novoCarro,
    listarCarros,
    buscarCarro,
    excluirCarro,
    atualizarCarro
};