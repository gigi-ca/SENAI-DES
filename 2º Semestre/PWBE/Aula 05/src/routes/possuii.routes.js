const express = require("express");
const router = express.Router();

const PossuiiController = require("../controllers/possuii.controller");

//Define os métodos e rotas de aplicação
router.get("/possuii", PossuiiController.listar);
router.get("/possuii/:id", PossuiiController.buscar);
router.post("/possui", PossuiiController.cadastrar);
router.delete("/possuii/:id", PossuiiController.apagar);
router.put("/possui", PossuiiController.atualizar);
router.patch("/possui/:id", PossuiiController.alterar);

module.exports = router;