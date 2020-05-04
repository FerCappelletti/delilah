const server = require('./app');
const db = require('./config/database');
const port = 3000;


db.authenticate()
.then(() => {
  console.log('Conectado')
})
.catch(err => {
  console.log('No se conectó')
})

server.listen(port, () => console.log('Server running on port: ' + port));

