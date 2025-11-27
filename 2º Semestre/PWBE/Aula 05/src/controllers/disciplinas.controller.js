const disciplinas = require("../data/disciplinas.data");

const listar = (req, res) => {
    res.send(disciplinas).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var dis = "";

    disciplinas.forEach((disciplina, index) => {
        if(disciplina.id === id){
            dis = disciplina;
        }
    });
    if(dis === "") dis = "Nao encontrado";

    res.send(dis).end();
};

const cadastrar = (req, res) => {
    const data = req.body;

    disciplinas.push(data);
    res.status(201).send("Disciplina cadastrada!").end();
};

const apagar = (req, res) =>{
    const id = req.params.id;

    var indice = -1;

    disciplinas.forEach((disciplina, index) => {
        if(disciplina.id === id){
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        disciplinas.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const dis = req.body;

    var encontrei = false;

    disciplinas.forEach((disciplina, index) => {
        if(disciplina.id == dis.id) {
            disciplinas[index] = dis;
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

const alterar = (req, res) => {
    const id = req.params.id;
    const DisUpdate = req.body;

    var indice = -1;

    disciplinas.forEach((disciplina, index) => {
        if(disciplina.id == id) {
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        Object.keys(DisUpdate).forEach((chave) => {
        disciplinas[indice][chave] = DisUpdate[chave];
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