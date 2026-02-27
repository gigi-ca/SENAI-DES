const express = require("express");

const router = express.Router();

const listaController = require("../controllers/carro.controller");

router.post("/carro", listaController.novoCarro);
router.get("/carros", listaController.listarCarros);
router.get("/carros/:id", listaController.buscarCarro);
router.delete("/carro/:id", listaController.excluirCarro);
router.put("/carro", listaController.atualizarCarro);

module.exports = router;