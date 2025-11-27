const db = require("../data/connection");

const listarFilmes = async (req, res ) => {
    const lista = await db.query("SELECT * FROM filmes;");

    res.json(lista[0]).end();
}

const buscarFilmes = async (req, res) => {
    const idFilme = req.params.id;

    const filme = await db.query("SELECT * FROM filmes WHERE id = " + idFilme);

    res.json(filme[0][0]).end();
}

const cadastrarFilme = async (req, res) => {
    const {titulo, categoria, preco} = req.body

try{
    const novoFilme = await db.query("INSERT INTO filmes VALUES (DEFAULT, ?, ?, ?)", [titulo, categoria, preco]);

    const filme = {
        id: novoFilme[0].insertId,
        titulo: titulo,
        categoria: categoria,
        preco: preco
    }
    res.json(filme).status(201).end();
} catch (error) {
    console.log(error);
    res.status(500).end();
}
}

const excluirFilme = async (req, res) => {
    const id = req.params.id;

    try {
        const remove = await db.query("DELET FROM filmes WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch (error) {
        console.log(error);

        const err = {msg:""};

        if(error.errno === 1064) {
            err.msg = "Filme com locação registrada";
        }

        res.status(500).json(err).end();
    }
}

const atualizarFilme = async (req, res) => {
    const {id, titulo, categoria, preco} = req.body

    try{
        const update = await db.query("UPDATE filmes SET titulo = ?, categoria = ?, preco = ? WHERE id = ?", [titulo, categoria, preco, id]);

        const info = {msg:""};

        if(update[0].affectedRows === 1) {
            info.msg = "Atualizado com sucesso";
        }
        else if(update[0].affectedRows === 0) {
            info.msg = "Filme não encontrado";
        }

        res.status(200).json(info).end();
    } catch(error) {
        console.log(error);

        res.status(500).end();
    }
}

module.exports = {
    listarFilmes,
    buscarFilmes,
    cadastrarFilme,
    excluirFilme,
    atualizarFilme
}