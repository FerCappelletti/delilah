const express = require("express");
const platosController = require ('../controllers/platos_controller');
const middlewareUsuario = require('../middlewares/usuarios_middlewares');
const middlewarePlatos = require('../middlewares/platos_middlewares')
const api = express.Router();

api.get('/', middlewareUsuario.tokenOk, platosController.getAllPlatos)
api.post('/',middlewareUsuario.tokenisAdmin, platosController.createPlato);
api.put('/', middlewarePlatos.platoFromDB, platosController.upDatePlato);
api.delete('/',middlewareUsuario.tokenisAdmin, middlewarePlatos.platoFromDB, platosController.deletePlato);

module.exports = api;

