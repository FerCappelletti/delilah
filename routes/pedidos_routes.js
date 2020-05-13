const express = require("express");
const middlewareUsuario = require('../middlewares/usuarios_middleware');
const pedidoController = require ('../controllers/pedido_controller')
const middlewarePedido = require('../middlewares/pedidos_middleware')
const api = express.Router();

api.get('/', middlewareUsuario.tokenisAdmin, pedidoController.getAllPedidos);
api.get('/', middlewareUsuario.tokenOk, pedidoController.getUsuarioPedido);
api.post('/', middlewareUsuario.tokenOk, middlewarePedido.platosPedidos, pedidoController.postPedido);
api.put('/', middlewareUsuario.tokenisAdmin, pedidoController.upDateEstadoPedido);
//api.delete('/', middlewareUsuario.tokenisAdmin, pedidoController.);


module.exports = api;