# Delilah Api
Api REST para realizar y administrar pedidos. Backend con Node JS / Express y base de datos relacional MySQL.

## Recursos y tecnologías implementadas
- Node js
- Express
- Body-parser
- JWT para autenticación de usuarios
- Bcrypt para hash de contraseñas
- Moment para registrar fecha y hora de ABM de pedidos
- Cors

## Objetivos

- Usuarios deben estar registrados en la DB del restó

- Registro de usuarios: no puede existir otro usuario registrado con el mismo email o usuario

- Las contraseñas se hashean con la libreria bcrypt antes de insertarse a la DB

- Usuarios para poder realizar pedidos deben loguearse con su usuario o email y la contraseña utilizada al momento del registro, desde el backend se devuelve un JWT token con 1 hora de tiempo de expiración

- Usuarios con permisos de administrador pueden realizar CRUD de platos y pedidos como tambien acceder a los datos de los usuarios registrados en la DB del restó

## Requisitos
1 - Clonar el repositorio:

    git clone https://github.com/FerCappelletti/delilah.git
    npm install

2 - Una vez clonado el repositorio en tu local abrir el archivo `createDB.sql` que se encuentra en la carpeta `scripts`, copiar las queries y ejecutarlas en el motor de base de datos en MySQL.

3 - Abrir el archivo `data.json` que se encuentra dentro de la carpeta `config` y completar con tus datos
   ` {"user": "tu_usuario",
     "password": "tu_password"
    }
`
Si quieres puedes cambiarle la firma para JWT aqui también

4 - Realizar un bulk-insert a las tablas usuarios y platos:

    cd scripts/
    node bulk.js

5 - Volver al directorio principal del proyecto y ejecutar el server:

    cd ..
    nodemon server.js/

6 - Ya podes empezar a testear los endpoints!
Selecciona `delilahResto.postman_collection.json` desde Postman y comienza a divertirte!!!


## Api documentación con Swagger
[Documentación de los endpoints](https://app.swaggerhub.com/apis-docs/FerCappelletti/delilahResto/1.0.0)
=======
#API documentation with Swagger
https://app.swaggerhub.com/apis-docs/FerCappelletti/delilahResto/1.0.0/
>>>>>>> b79d67278aa1f268ba9870ced42103f2399eeb4d
