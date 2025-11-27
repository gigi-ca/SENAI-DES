const inscricaoController = require("../controllers/inscricoes.controller");
const express = require('express');

const router = express.Router();

router.get("/inscricoes", inscricaoController.listarInscricoes);
router.post("/inscricoes", inscricaoController.cadastrarInscricao);
router.delete("/inscricoes/:id", inscricaoController.excluirInscricao);
router.put("/inscricoes/:id", inscricaoController.atualizarInscricao);

module.exports = router;