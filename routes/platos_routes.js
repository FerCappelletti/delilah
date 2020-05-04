const express = require("express");
const platosController = require ('../controllers/platos_controller');
const middlewares = require('../middlewares/usuarios_middlewares');
const api = express.Router();

api.get('/',  platosController.getAllPlatos)
api.post('/', platosController.createPlato);
api.put('/', platosController.upDatePlato);
api.delete('/', platosController.deletePlato);

module.exports = api;