const db = require("../config/database");
const moment = require("moment");
//calcular precio subtotal del detalle

const postPedido = async (req, res) => {
    let usuario = req.usuario;
    let hora = moment().format('YYYY-DD-MM HH:mm:ss');
    let newPedido = req.body;
    let detalle = newPedido.detalle
    
    db.query(
        "INSERT INTO pedidos (id_usuarios, id_forma_pago, hora) VALUES (?, ?, ?)",
        {
            replacements: [usuario.id, newPedido.id_forma_pago, hora]
        }).then((respuesta) => {
            let idPedido = respuesta[0];
            let total = 0;
            detalle.forEach(async function (element) {
                let precio = await getPrecioPlato(element.idPlato);
                let precio_subtotal = precio.precio * element.cantidad;
                total = total + precio_subtotal;

                db.query('INSERT INTO detalle_pedido (id_pedidos, id_plato, cantidad, precio_subtotal) VALUES (?, ?, ?, ?)',
                    {
                        replacements: [idPedido, element.idPlato, element.cantidad, precio_subtotal]
                    }).then((respuesta) => {
                        console.log(total)
                    }).catch((error) => {
                        console.log('catch del foreach' + error)
                    })
            })
            /////
     //total en pedidos = insert total sumando subtotal where id_pedidos = id_pedidos
            res.status(200).send(' pedido insertado')
        }).catch((error) => {
            res.status(500).send('catch insert pedidos' + error)
        });
}

function getPrecioPlato(idPlato) {
    return new Promise(function (resolve, reject) {
        db.query('SELECT precio FROM platos WHERE id = ?',
            { replacements: [idPlato], type: db.QueryTypes.SELECT })
            .then((respuesta) => {
                if (respuesta.length !== 0) {
                    resolve(respuesta[0]);
                }
            }).catch((error) => {
                reject('plato no existe' + error)
            })
    });
}

const upDateEstadoPedido = (req, res) => {
    //si es admin patch estado}
    let estado = req.body.idEstado
};
const getAllPedidos = (req, res) => {
    //JOIN si es admin};
};
const getEstadoPedido = (req, res) => {
    //JOIN pedido del usuario select pedidos where idusuario
};
const platosFavoritos = (req, res) => { };
const getPedidoByIdPedido = (req, res) => { };

module.exports = {
    postPedido,
    upDateEstadoPedido,
    getAllPedidos,
    getEstadoPedido,
    //platosFavoritos
};
