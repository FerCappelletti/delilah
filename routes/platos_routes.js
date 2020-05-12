const express = require("express");
const platosController = require ('../controllers/platos_controller');
const middlewareUsuario = require('../middlewares/usuarios_middleware');
const middlewarePlatos = require('../middlewares/platos_middleware')
const api = express.Router();

api.get('/', middlewareUsuario.tokenisAdmin, platosController.getAllPlatos)
api.get('/', middlewareUsuario.tokenOk, platosController.getPlatosDisponibles)
api.post('/',middlewareUsuario.tokenisAdmin, middlewarePlatos.datosPlato, platosController.createPlato);
api.put('/', middlewarePlatos.platoFromDB, platosController.upDatePlato);
api.delete('/', middlewareUsuario.tokenisAdmin, middlewarePlatos.platoFromDB , platosController.deletePlato);

module.exports = api;

