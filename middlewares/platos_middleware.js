const db = require('../config/database.js');

const datosPlato = async (req, res, next) => {
    let plato = req.body;
    if(plato.nombre && plato.precio) {
        next();
      }else {
        res.status(401).send("Algunos de los datos no son correctos");
      }
};

const platoFromDB = (req,res,next) =>{
    let plato = req.body;
    db.query('SELECT * FROM platos WHERE id = :id',
    {replacements:plato, type: db.QueryTypes.SELECT})
    .then((respuesta)=>{
      if(respuesta[0].id > 0){
        next();
      };
    }).catch((error)=>{
      res.status(404).send(error)
    });
  };

module.exports = {
    platoFromDB,
    datosPlato
}