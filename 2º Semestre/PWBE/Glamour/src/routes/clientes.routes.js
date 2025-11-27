const clienteController = require("../controllers/cliente.controller");
const express = require('express');
const validate = require('../middlewares/auth');

const router = express.Router();

router.get("/clientes", clienteController.listarClientes);
router.get("/clientes/:id", clienteController.buscarClientes);
router.post("/clientes", clienteController.cadastrarCliente);
router.put("/clientes/:id", clienteController.atualizarCliente);
router.delete("/clientes/:id", clienteController.excluirCliente);

module.exports = router;