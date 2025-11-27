const express = require("express");
const router = express.Router();

const ProdutosController = require("../controllers/produtos.controller");
const { route } = require("./clientes.routes");

router.get("/produtos/:codigo", ProdutosController.buscar);
router.put("/produto", ProdutosController.atualizar);
router.patch("/produto/:codigo", ProdutosController.alterar);
router.delete("/produtos/:codigo", ProdutosController.excluir);

module.exports = router;