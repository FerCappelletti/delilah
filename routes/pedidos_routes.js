const express = require("express");
const usuarioController = require('../controllers/usuario_controller');
const middlewares = require('../middlewares/usuarios_middlewares');
const platosController = require ('../controllers/platos_controller')
const pedidoController = require ('../controllers/pedido_controller')

const api = express.Router();

api.get('/', platosController.getAllPlatos);
api.post('/',  pedidoController.createPedido);
api.put('/', pedidoController.upDatePedido);
api.delete('/', pedidoController.deletePedido);


module.exports = api;