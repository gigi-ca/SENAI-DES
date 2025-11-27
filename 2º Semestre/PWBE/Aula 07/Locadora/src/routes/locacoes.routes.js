const express = require('express');
const router = express.Router();

const locacoesController = require("../controllers/locacoes.controller");

router.post("/locacao", locacoesController.registrarLocacao);
router.get("/locacao/:id", locacoesController.buscarLocacao);
router.delete("/locacao/:id", locacoesController.excluirLocacao);
router.get("/locacoes", locacoesController.listarLocacoes);
router.get("/locacao/cliente/:cliente_id", locacoesController.listarLocacoesporIDcliente);
router.get("/locacao/status/:status", locacoesController.listarLocacoesporStatus);
router.get("/locacoes/total", locacoesController.totalFaturamento);


module.exports = router;