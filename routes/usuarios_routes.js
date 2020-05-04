const express = require("express");
const usuarioController = require('../controllers/usuario_controller');
//const platosController = require ('../controllers/platos_controller')
const middlewares = require('../middlewares/usuarios_middlewares');
const api = express.Router();

api.post('/', middlewares.userDataOk, usuarioController.createUser);
api.post('/login',middlewares.dataLogin, usuarioController.logIn)
api.get('/',middlewares.tokenisAdmin, usuarioController.getAllUsers);

module.exports = api;