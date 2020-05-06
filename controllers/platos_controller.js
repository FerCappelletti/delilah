const db = require("../config/database.js");

const getAllPlatos = (req, res) => {
  db.query("SELECT * FROM platos WHERE disponible = 1")
    .then((platos) => {
      res.status(200).json(platos[0]);
    })
    .catch((error) => {
      res.status(401).send('Usuario no logueado');
    });
};

const createPlato = (req, res) => {
  let plato = req.body;
  plato.disponible = 1;

  db.query(
    "INSERT INTO platos (nombre, precio, url_imagen, disponible) VALUES (:nombre, :precio, :url_imagen, :disponible)",
    { replacements: plato }
  )
    .then((respuesta) => {
      console.log(respuesta);
      res.status(201).send('Plato: ' + respuesta.nombre + ' agregado a la DB');
    })
    .catch((error) => {
      res.status(500).send('Plato no agregado por: ' + error);
    });
};

const upDatePlato = (req, res) => {
  let plato = req.body;
  db.query(
    "UPDATE platos SET nombre = ?, precio = ?, url_imagen = ?, disponible = ? WHERE id = ?",
    {
      replacements: [
        plato.nombre,
        plato.precio,
        plato.url_imagen,
        plato.disponible,
        plato.id,
      ],
      type: db.QueryTypes.SELECT,
    }
  )
    .then((plato) => {
      console.log(plato[0]);
      res.status(203).send('Se actualizaron los datos correctamente del plato: ' + plato.nombre);
    })
    .catch((error) => {
      res.status(500).send('Datos no actualizados por: ' + error);
    });
};
const deletePlato = (req, res) => {
  let plato = req.body;
  console.log(plato)
  db.query("DELETE FROM platos WHERE id = :id", {
    replacements: plato
  })
    .then((respuesta) => {
      res
        .status(200)
        .send(
          `Plato ${plato.nombre} con el id: ${plato.id} eliminado de la DB`
        );
    })
    .catch((error) => {
      res.status(401).send('No se pudo eliminar el plato por: ' + error);
    });
};

module.exports = {
  getAllPlatos,
  createPlato,
  upDatePlato,
  deletePlato,
};
