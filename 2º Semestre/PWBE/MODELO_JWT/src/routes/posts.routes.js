const postsController = require("../controllers/posts.controller");

const express = require('express');
const validate = require('../middlewares/auth');
const { validaGerente, validaEditor } = require("../middlewares/validaCargo");

const postsRoutes = express.Router();

postsRoutes.post('/posts', validate, validaEditor, postsController.createpost);
postsRoutes.put('/posts/:id', validate, validaEditor, postsController.editpost);
postsRoutes.get('/posts', validate, validaEditor, postsController.listpost);
postsRoutes.get('/posts/:id', validate, validaEditor, postsController.lookpost);

postsRoutes.delete('/posts/:id', validate, validaGerente, postsController.deletepost);
postsRoutes.get('/post/:id', validate, validaGerente, postsController.buscaautor);
postsRoutes.get('/total/posts', validate, validaGerente, postsController.totalPost);


module.exports = postsRoutes;