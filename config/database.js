const user = require('./data.json').user;
const password = require('./data.json').password;

const Sequelize = require("sequelize");
module.exports = new Sequelize("delilah", user, password, {
  host: "localhost",
  dialect: "mysql"
});




