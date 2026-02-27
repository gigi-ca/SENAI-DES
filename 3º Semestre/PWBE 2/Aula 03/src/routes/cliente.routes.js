const express = require("express");

const router = express.Router();

const listaController = require("../controllers/cliente.controller");

router.post("/cliente", listaController.novoCliente);
router.get("/clientes", listaController.listarCliente);
router.get("/clientes/:id", listaController.buscarCliente);
router.delete("/cliente/:id", listaController.excluirCliente);
router.put("/cliente", listaController.atualizarCliente);

module.exports = router;