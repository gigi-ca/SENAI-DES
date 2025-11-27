const express = require('express');
const router =  express.Router();

const clientesController =  require("../controllers/cliente.controllers");

router.get("/clientes", clientesController.listarClientes);
router.get("/cliente/:id", clientesController.buscarClientes);
router.post("/cliente", clientesController.cadastrarCliente);
router.delete("/cliente/:id", clientesController.excluirCliente);
router.put("/cliente", clientesController.atualizarCliente);

module.exports = router;