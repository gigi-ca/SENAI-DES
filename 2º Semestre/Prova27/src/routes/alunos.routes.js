const alunoController = require("../controllers/alunos.controller");
const express = require('express');

const router = express.Router();

router.get("/alunos", alunoController.listarAlunos);
router.post("/alunos", alunoController.cadastrarAluno);
router.delete("/alunos/:id", alunoController.excluirAluno);
router.put("/alunos/:id", alunoController.atualizarAluno);

module.exports = router;