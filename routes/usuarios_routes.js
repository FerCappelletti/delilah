const express = require("express");
const usuarioController = require('../controllers/usuario_controller')
const middlewareUsuario = require('../middlewares/usuarios_middlewares');
const api = express.Router();

api.post('/', middlewareUsuario.userDataOk, usuarioController.createUser);
api.post('/login',middlewareUsuario.dataLogin, usuarioController.logIn)
api.get('/', middlewareUsuario.tokenisAdmin, usuarioController.getAllUsers);

module.exports = api;