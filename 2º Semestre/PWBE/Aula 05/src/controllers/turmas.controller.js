const turmas = require("../data/turmas.data");

const listar = (req, res) => {
    res.send(turmas).end();
};

const buscar = (req, res) => {
    const id= req.params.id;

    var tur = "";

    turmas.forEach((turma, index) => {
        if(turma.id === id){
            tur = turma;
        }
    });

    if(tur === "") tur = "Nao encontrado";

    res.send(tur).end();
};

const cadastrar = (req, res) => {
    const data = req.body;

    turmas.push(data);
    res.status(201).send("A turma foi cadastrada!").end();
};

const apagar = (req, res) =>{
    const id = req.params.id;

    var indice = -1;

    turmas.forEach((turma, index) => {
        if(turma.id === id){
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        turmas.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const tur = req.body;

    var encontrei = false;

        turmas.forEach((turma, index) => {
        if(turma.id == tur.id) {
            turmas[index] = tur;
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
    const TurUpdate = req.body;

    var indice = -1;

    turmas.forEach((turma, index) => {
        if(turma.id == id) {
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        Object.keys(TurUpdate).forEach((chave) => {
        turmas[indice][chave] = TurUpdate[chave];
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