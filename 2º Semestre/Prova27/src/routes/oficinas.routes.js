const oficinaController = require("../controllers/oficinas.controller");
const express = require('express');

const router = express.Router();

router.get("/oficinas", oficinaController.listarOficinas);
router.post("/oficinas", oficinaController.cadastrarOficina);
router.delete("/oficinas/:id", oficinaController.excluirOficina);
router.put("/oficinas/:id", oficinaController.atualizarOficina);

module.exports = router;