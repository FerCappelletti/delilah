const db = require('../config/database.js');

const platoFromDB = async (req, res, next) => {
    let plato = req.body;
    await db.query('SELECT * FROM platos WHERE id = :id',
    {   replacements: plato,
        type: db.QueryTypes.SELECT})
    .then((platoFromDB) => {
        if(platoFromDB[0].id !== null){
            next()
        }
    }).catch((error) => {
        res.status(404).send('plato no existe catch del midd plato' + error)
    })
};

module.exports = {
    platoFromDB,
}