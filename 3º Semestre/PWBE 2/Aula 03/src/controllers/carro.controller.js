const prisma = require("../data/prisma");

const novoCarro = async (req, res) => {
    let {placa, modelo, marca, ano } = req.body;

    if (!placa){
        return res.status(400).json({mensagem: "Você precisa colocar a placa antes!"});
    }else if (placa.length !== 7 || placa.includes(" ") === true){
        return res.status(400).json({mensagem: "A placa deu erro!"});
    }

    placa = placa.toUpperCase();

    const placaExiste = veiculo.some(veiculo => 
        veiculo.placa.toUpperCase() === placa
    );

    if (placaExiste){
        return res.status(400).json({mensagem: "Já existe um carro com essa placa!"});
    }

    if (!modelo){
        return res.status(400).json({mensagem: "O modelo é obrigatório!"});
    }

    if (!marca){
        return res.status(400).json({mensagem: "A marca é obrigatória!"});
    }

    if (ano.length !== 4){
        return res.status(400).json({mensagem: "Ano invalido!"});
    }
    if (typeof ano !== "number") {
    return res.status(400).json({ mensagem: "Ano inválido!" });
    }
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