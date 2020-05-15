const db = require("../config/database.js");

const getAllPlatos = (req, res) => {
  db.query("SELECT * FROM platos")
  .then((platos) => {
    res.status(200).json(platos[0]);
  })
  .catch((error) => {
    res.status(401).send('Credenciales no válidas o vencidas');
  });
}

const getPlatosDisponibles = (req, res) => {
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
      res.status(201).send('Plato: ' + plato.nombre + ' agregado a la DB');
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
        plato.id
      ]
    }
  )
    .then((plato) => {
      res.status(203).send('Se actualizaron los datos correctamente');
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
          'Plato con el id: ' + plato.id + ' eliminado de la DB'
        );
    })
    .catch((error) => {
      res.status(401).send('No se pudo eliminar el plato por: ' + error);
    });
};

const platosFavoritos = (req, res) => {
  let usuario = req.usuario.id
  console.log(usuario)
  db.query('SELECT p.id AS idPedido, u.id AS usuario, dp.id_plato, dp.cantidad, pl.nombre FROM detalle_pedido dp JOIN pedidos p ON dp.id_pedidos = p.id JOIN  platos pl ON dp.id_plato = pl.id INNER JOIN usuarios u ON p.id_usuarios = u.id WHERE u.id = ? ORDER BY dp.cantidad DESC', {replacements: [usuario]}).then((respuesta) => {
    let platos = respuesta[0];
        res.json(platos)
  }).catch((error) => {
    res.status(404).send(error)
  })
};
module.exports = {
  getAllPlatos,
  createPlato,
  upDatePlato,
  deletePlato,
  getPlatosDisponibles,
  platosFavoritos
};
