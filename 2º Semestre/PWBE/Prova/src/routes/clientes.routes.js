const express = require("express");
const router = express.Router();

const ClientesController = require("../controllers/clientes.controller");

router.get("/clientes/:CPF", ClientesController.buscar);
router.post("/cliente", ClientesController.cadastrar);

module.exports = router;