const agendamentoController = require("../controllers/agendamentos.controller");
const express = require('express');
const validate = require('../middlewares/auth');

const router = express.Router();

router.get("/agendamentos", agendamentoController.listarAgendamentos);
router.get("/agendamentos/:id", agendamentoController.buscarAgendamento);
router.post("/agendamentos", agendamentoController.cadastrarAgendamento);
router.put("/agendamentos/:id", agendamentoController.atualizarAgendamento);
router.delete("/agendamentos/:id", agendamentoController.excluirAgendamento);

module.exports = router;