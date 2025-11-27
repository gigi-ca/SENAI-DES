const pedidos = require("../data/pedidos.data");

const listar = (req, res) => {
    res.send(pedidos).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var ped = "";

    pedidos.forEach((pedidos, index) => {
        if(pedidos.id === id){
            ped = pedidos;
        } 
    });
    if(ped === "") ped = "Nao encontrado";

    res.send(ped).end();
};

const cadastrar = (req, res) => {
    const data = req.body;

    var possui = "";

    if(data.quantidade === ""){
        possui = "Insira quantidade";
        res.status(404).send(possui).end();
    }
    else if (data.quantidade === "0"){
        possui = "Insira quantidade";
        res.status(404).send(possui).end();
    }
    else{
        pedidos.push(data);
        res.status(201).send("Cadastrado com sucesso").end();
    }
};


const atualizar = (req, res) => {
    const ped = req.body;

    var encontrei = false;

    pedidos.forEach((pedido, index) => {
        if(pedido.id == ped.id){
            pedidos[index] = ped;
            encontrei = true;
        }
    });
    if(encontrei == false) {
        res.status(404).end();
    }
    else {
        res.status(201).end();
    }
};

module.exports = {
    buscar,
    listar,
    cadastrar,
    atualizar
}