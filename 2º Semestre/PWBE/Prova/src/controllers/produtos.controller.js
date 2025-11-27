const produtos = require("../data/produtos.data");

const buscar = (req, res) =>{
    const codigo = req.params.codigo;

    var pro = "";

    produtos.forEach((produtos, index) => {
        if(produtos.codigo === codigo){
            pro = produtos;
        }
    });
    if(pro === "") pro = "Produto nao encontrado!";

    res.send(pro).end();
};

const atualizar = (req, res) => {
    const pro = req.body;

    var encontrei = false;

    produtos.forEach((produto, index) => {
        if(produto.codigo == pro.codigo){
            produtos[index] = pro;
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
    const codigo = req.params.codigo;
    const proUpdate = req.body;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.codigo == codigo){
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        Object.keys(proUpdate).forEach((chave) => {
            produtos[indice][chave] = proUpdate[chave];
        });
        res.status(200).end();
    }
};

const excluir = (req, res) => {
    const codigo = req.params.codigo;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.codigo === codigo){
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }
    else{
        produto.splice(indice, 1);
        res.status(200).end();
    }
};

module.exports = {
    buscar,
    atualizar,
    alterar,
    excluir
}