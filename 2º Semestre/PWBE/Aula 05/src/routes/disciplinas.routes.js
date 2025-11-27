const express = require("express");
const router = express.Router();

const DisciplinasController = require("../controllers/disciplinas.controller");

//Define os métodos e rotas de aplicação
router.get("/disciplinas", DisciplinasController
.listar);
router.get("/disciplinas/:id", DisciplinasController
.buscar);
router.post("/disciplina", DisciplinasController.cadastrar);
router.delete("/disciplinas/:id", DisciplinasController.apagar);
router.put("/disciplina", DisciplinasController.atualizar);
router.patch("/disciplina/:id", DisciplinasController.alterar);

module.exports = router;