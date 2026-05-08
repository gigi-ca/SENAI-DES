const express = require("express");

const router = express.Router();

const { cadastrarSorvete, listarSorvetes, buscarSorvetePorId, atualizarSorvete, excluirSorvete} = require("../controllers/sorvetes.controller");

router.post("/cadastrar", cadastrarSorvete);
router.get("/listar", listarSorvetes);
router.get("/buscar/:id", buscarSorvetePorId);
router.put("/atualizar/:id", atualizarSorvete);
router.delete("/excluir/:id", excluirSorvete);

module.exports = router;