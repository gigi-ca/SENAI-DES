const dataPosts = require("../data/connection");

const createpost = async (req, res) => {
    try {
        const { titulo, conteudo } = req.body;
        const userId = req.headers['user'].id;

        const resultado = await dataPosts.query("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?)", [userId, titulo, conteudo]);

        const novoPost = { 
            id: resultado[0].insertId, 
            titulo: titulo,
            conteudo: conteudo
        };
        
        res.status(201).json(novoPost).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
}

const editpost = async (req, res) => {
    const {titulo, conteudo} = req.body;
    const id = req.params.id;

    try{
        const update = await dataPosts.query("UPDATE posts SET titulo = ?, conteudo = ? WHERE id = ?", [titulo, conteudo, id]);

        const info = {msg:""};

        if(update[0].affectedRows === 1){
            info.msg = "Post editado com sucesso!!";
        }
        else if(update[0].affectedRows === 0){
            info.msg = "O post não foi encontrado!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
}

const listpost = async (req, res) => {
    const lista = await dataPosts.query("SELECT *FROM posts;");

    res.json(lista[0]).end();
}

const lookpost = async (req, res) => {
    const idPost = req.params.id;

    const post = await dataPosts.query("SELECT * FROM posts WHERE id = " + idPost);

    res.json(post[0][0]).end();
}

const deletepost = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await dataPosts.query("DELETE FROM posts WHERE is = ?", [id]);

        console.log(remove);

        res.status(200).end();
    }catch(error) {
        console.log(error);

        const err = {msg:""};

        if(error.errno === 1451) {
            err.msg = "Post já registrado";
        }

        res.status(500).json(err).end();
    }
}

const buscaautor = async (req, res) => {
    const idUser = req.params.id;

    const post = await dataPosts.query("SELECT * FROM posts WHERE id = " + idUser);

    res.json(post[0][0]).end();
}

const totalPost = async (req, res) => {
    const total = await dataPosts.query("SELECT COUNT(*) AS total FROM posts");

    res.json(total[0]).end();
}

module.exports = {
    createpost,
    editpost,
    listpost,
    lookpost,
    deletepost,
    buscaautor,
    totalPost
}