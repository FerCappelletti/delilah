const db = require('../config/database');
//nos traemos el id de los platos que pidio
const platosPedidos = (req, res, next) => {
    let platosPedidos = req.body.detalle
    if(platosPedidos.length > 0){
        next();
    }else{
        res.status(500).send('Invalid request')
    }
}

module.exports = {
    platosPedidos
}