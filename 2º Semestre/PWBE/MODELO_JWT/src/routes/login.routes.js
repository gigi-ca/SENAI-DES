const loginController = require('../controllers/login.controller');

const express = require('express');
const validate = require('../middlewares/auth');
const { validaGerente } = require('../middlewares/validaCargo');

const loginRoutes = express.Router();

loginRoutes.post('/login', loginController.Login);
loginRoutes.post('/register', loginController.cadastrarUsuario);
loginRoutes.get('/validate', validate);

loginRoutes.get('/users', validate, validaGerente, loginController.listusuarios);
loginRoutes.get('/posts/autor/:id', validate, validaGerente, loginController.postAutor);

module.exports = loginRoutes;