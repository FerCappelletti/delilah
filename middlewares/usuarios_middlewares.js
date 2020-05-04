const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10
//const db = require('../config/database.js')
const firma = require('../config/data.json').firma;


const userDataOk = async (req, res, next) => {
  let user = {
    nombre_usuario: req.body.nombre_usuario,
    apellido_usuario: req.body.apellido_usuario,
    email: req.body.email,
    usuario: req.body.usuario,
    password: req.body.password,
    telefono: req.body.telefono,
    domicilio: req.body.domicilio,
    isAdmin: 0
  }
    if(user) {
      next();
    }else {
      res.status(401).send("Algunos de los datos no son correctos");
    }
};
//middleware para loguearse
const dataLogin = (req, res, next) => {
  let user = req.body
  if((user.usuario || user.email) && user.password){
    next();
  }else {
    res.status(401).send('Usuario o email incorrecto')
  };
};

const tokenisAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const usuario = jwt.verify(token, firma);
  console.log(usuario)
  if (usuario.isAdmin.data[0] === 1) {
    console.log(usuario.isAdmin)
      next();
  } else {
      res.status(401).send('Usuario no tiene permisos para acceder a ésta información');
  }
}

const tokenOk = (req,res, next) => {
  next()
}
module.exports = {
  userDataOk,
  tokenisAdmin,
  dataLogin
};
