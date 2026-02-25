const express = require("express");

const router = express.Router();

const listaController = require("../controllers/carro.controller");

router.post("/carro", listaController.novoCarro);
router.get("/carros", listaController.listarCarros);
