const possuii = require("../data/possuii.data");

const listar = (req, res) => {
    res.send(possuii).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var pos = "";

    possuii.forEach((possui, index) => {
        if(possui.id === id){
            pos = possui;
        }
    });
    if(pos === "") pos = "Nao encontrado";

    res.send(pos).end();
};

const cadastrar = (req, res) => {
    const data = req.body;

    possuii.push(data);
    res.status(201).send("Cadastrado com sucesso!").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    possuii.forEach((possui, index) => {
        if(possui.id === id){
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        possuii.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const pos =  req.body;

    var encontrei = false;

    possuii.forEach((possui,index) => {
        if(possui.id == pos.id){
            possuii[index] = pos;
            encontrei = true;
        }
    });
    if(encontrei == false){
        res.status(404).end();
    }
    else{
        res.status(201).end();
    }
};

const alterar = (req, res) => {
    const id = req.params.id;
    const PosUpdate = req.body;

    var indice = -1;

    possuii.forEach((possui, index) => {
        if(possui.id == id){
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        Object.keys(PosUpdate).forEach((chave) => {
            possuii[indice][chave] = PosUpdate[chave];
        });

    res.status(200).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar,
    alterar
}