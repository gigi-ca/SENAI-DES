const profissionaisController = require("../controllers/profissionais.controller");
const express = require('express');
const validate = require('../middlewares/auth');

const router = express.Router();

router.get("/profissionais", profissionaisController.listarProfissionais);
router.get("/profissionais/:id", profissionaisController.buscarProfissional);
router.post("/profissionais", profissionaisController.cadastrarProfissional);
router.put("/profissionais/:id", profissionaisController.atualizarProfissional);
router.delete("/profissionais/:id", profissionaisController.excluirProfissional);

module.exports = router;