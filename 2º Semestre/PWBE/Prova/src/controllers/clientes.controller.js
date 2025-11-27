const clientes = require("../data/clientes.data");

const buscar = (req, res) => {
    const CPF = req.params.CPF;

    var user = "";

    clientes.forEach((clientes, index) => {
        if(clientes.CPF === CPF){
            user = clientes;
        }
    });
    if(user === "") user = "Nao encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    const CPF = req.params.CPF;

    if(CPF === ""){
        res.status(404).end();
    }

    clientes.push(data);
    res.status(201).send("Cliente cadastrado com sucesso!").end();
};

module.exports ={
    buscar,
    cadastrar
}