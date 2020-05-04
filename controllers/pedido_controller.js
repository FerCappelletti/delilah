const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  "mysql://root:santino10@localhost:3306/delilahPrueba"
);

const createPedido = (req, res) => {};
const deletePedido = (req, res) => {};
const upDatePedido = (req, res) => {};
const getAllPedidos = (req, res) => {};

module.exports = {
    createPedido,
    deletePedido,
    upDatePedido,
    getAllPedidos
}