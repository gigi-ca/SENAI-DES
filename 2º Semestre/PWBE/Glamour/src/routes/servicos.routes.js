const servicosController = require("../controllers/servicos.controller");
const express = require('express');
const validate = require('../middlewares/auth');

const router = express.Router();

router.get("/servicos", servicosController.listarServicos);
router.get("/servicos/:id", servicosController.buscarServicos);
router.post("/servicos", servicosController.cadastrarServico);
router.put("/servicos/:id", servicosController.atualizarServico);
router.delete("/servicos/:id", servicosController.excluirServico);

module.exports = router;