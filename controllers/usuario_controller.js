const db = require("../config/database.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const moment = require("moment");
const jwt = require("jsonwebtoken");
const firma = require('../config/data.json').firma;


const createUser = async (req, res) => {
  let usuario = req.body;
  usuario.password = await bcrypt.hash(usuario.password, saltRounds);
  usuario.isAdmin = 0;

  db.query(
    "INSERT INTO usuarios (nombre_usuario, apellido_usuario, email, usuario, password, telefono, domicilio, isAdmin) VALUES (:nombre_usuario, :apellido_usuario, :email, :usuario, :password, :telefono, :domicilio, :isAdmin) ",
    { replacements: usuario }
  )
    .then((respuesta) => {
      //chequear rta cuando posteamos un usuario q ya existe
      // if(respuesta.id > 0) {
      console.log(respuesta);
      res.status(201).send("Usuario creado");
      // } else {
      //   res.status(406).send('salio x el else de createUser')
      // }
    })
    .catch((error) => {
      res.status(500).send("sale por el catch del controlador" + error);
    });
};

const getAllUsers = async (req, res) => {
  db.query("SELECT * FROM usuarios")
    .then((usuarios) => {
      res.status(200).json(usuarios[0]);
    })
    .catch((error) => {
      res.status(401).send("Unauthorized");
    });
};

const logIn = async (req, res) => {
  //usuario puede loguearse con usuario o email y password select where usuario || email && password
  let user = req.body;

  db.query("SELECT * FROM usuarios WHERE usuario = :usuario OR email =:email", {
    replacements: user,
    type: db.QueryTypes.SELECT,
  })
    .then(async (userLogin) => {
      console.log(userLogin)
      let isMatch = await bcrypt.compareSync(user.password, userLogin[0].password);

      if (isMatch) {
        console.log(userLogin[0]);
        res.json({ token: (token = jwt.sign(userLogin[0], firma))});

      } else {
        res.status(401).send("Usuario o contraseña no válido");
      }
    })
    .catch((error) => {
      res.status(500).send("catch del login");
    });
};

module.exports = {
  createUser,
  getAllUsers,
  logIn,
};
