//Acá se guarda la informacion de la base de dato a la cual va acceder nuestra api dependiendo del entorno
//importo el archivo de constantes globales. Aca configuramos nuestro entorno.
const globalConstants = require('../../const/globalConstants')

module.exports = {
  "development": {
    "username": globalConstants.DB_USERNAME,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
