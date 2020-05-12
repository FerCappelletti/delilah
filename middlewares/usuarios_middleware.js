const jwt = require("jsonwebtoken");
const firma =require('../config/data.json').firma;

const userDataOk = async (req, res, next) => {
  let user = req.body;
    if(user.nombre_usuario && user.apellido_usuario && user.email && user.usuario && user.password && user.telefono && user.domicilio) {
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

  if (usuario.isAdmin.data[0] === 1) {
      next();
  } else {
      res.status(401).send('Usuario no tiene permisos para acceder a ésta información');
  }
}

const tokenOk = (req,res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const usuario = jwt.verify(token, firma);
  if (usuario) {
      req.usuario = usuario;
      next();
  } else {
      res.status(401).send('Usuario no registrado o el token expiró');
  }
};

module.exports = {
  userDataOk,
  tokenisAdmin,
  dataLogin,
  tokenOk
};
