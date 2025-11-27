const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/pedidos.controller");

router.get("/pedidos", PedidosController.listar);
router.get("/pedidos/:id", PedidosController.buscar);
router.post("/pedido", PedidosController.cadastrar);
router.put("/pedido", PedidosController.atualizar);

module.exports = router;