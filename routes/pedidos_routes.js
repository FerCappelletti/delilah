const express = require("express");
const middlewareUsuario = require('../middlewares/usuarios_middlewares');
const platosController = require ('../controllers/platos_controller')
const pedidoController = require ('../controllers/pedido_controller')

const api = express.Router();

api.get('/', middlewareUsuario.tokenOk, platosController.getAllPlatos);
api.post('/', middlewareUsuario.tokenOk, pedidoController.createPedido);
api.put('/', middlewareUsuario.tokenisAdmin, pedidoController.upDatePedido);
api.delete('/', middlewareUsuario.tokenisAdmin, pedidoController.deletePedido);


module.exports = api;