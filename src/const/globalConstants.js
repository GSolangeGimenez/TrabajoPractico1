//se llama  a ésta dependencia 
require('dotenv').config()

module.exports= {
    //aca le decimos si por alguna razon no se encuentra el puerto 8000, que busque el puerto 5000 por defecto
    PORT: process.env.PORT || 5000,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD
}