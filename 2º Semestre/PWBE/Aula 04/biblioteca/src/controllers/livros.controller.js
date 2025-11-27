const livros =  require("../data/livros.data");

const listar = (req, res) => {
    res.send(livros).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var book = "";

    livros.forEach((livros, index) => {
        if(livros.id === id){
            book = livros;
        }
    });

    if(book === "") book ="Não encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;

    livros.push(data);
    res.status(201).send("Cadastrado com sucesso!")
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    livros.forEach((livros, index) => {
        if(livros.id === id) {
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        livros.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const book = req.body;

    var encontrei = false;

    livros.forEach((livros, index) => {
        if(livros.id === book.id){
            livros[index] = book;
            encontrei = true;
        }
    });
    if(enocntrei == false){
        res.status(404).end();
    }
    else{
        re.status(201).end();
    }
};

const alterar = (req, res) => {
    const id = req.params.id;
    const bookUpdate = req.body;

    var indice = -1;

    livros.forEach((livros, index) => {
        if(livros.id == id){
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        Object.keys(bookUpdate).forEach((chave) => {
            livros[indice][chave] = bookUpdate[chave];
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