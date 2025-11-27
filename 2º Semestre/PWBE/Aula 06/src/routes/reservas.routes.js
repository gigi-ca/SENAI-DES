const express = require("express");
const router = express.Router();

const ReservasController = require("../controllers/reservas.controller");

router.get("/reservas", ReservasController.listar);
router.post("/reserva", ReservasController.cadastrar);
router.patch("/reserva/:id", ReservasController.finalizar);

module.exports = router;