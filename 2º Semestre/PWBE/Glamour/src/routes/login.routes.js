const loginController = require("../controllers/login.controller");
const express = require('express');
const validate = require('../middlewares/auth');

const router = express.Router();

router.post('/login', loginController.login);
router.post('/cadastrar', loginController.cadastrarProfissional);
router.get('/validate', validate);

module.exports = router;