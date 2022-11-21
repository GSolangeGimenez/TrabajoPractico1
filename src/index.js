//var http = require('http')//importa el módulo http

//http.createServer(function(req,res){  //llamamos a la funcion de crear servidor. 
//res.writeHead(200,{'content-type': 'text/html'});//establecemos tipo de contenido que acepta
//res.end("hola") //escribimos el mensaje de respuesta
//}).listen(5000)  //especificamos puerto. 

//console.log('servidor funcionandooo');


//Importamos express y creamos una instancia de app 

//const { application } = require('express')
//const express =  require('express')
//creamos nuestra primera ruta
//app.get('/', (req,res)=>{
    //hacemos que devuelva este mensaje cuando llamamos al res.send
    //res.send("holaa!")
    //app.listen(5000)
   // console.log('server andando!');
//})
const express = require('express')

const globalConstants = require('./const/globalConstants')
const routerConfig = require('./routes/index.routes')
//Para usar variables de entorno
require('dotenv').config()

const PORT = process.env.PORT

const configuracionApi = (app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    return;
}
const configuracionRouter = (app) =>{
    //ruta principal de express para arrancar
    app.use('/api/', routerConfig.rutas_init())
}

//funcion para que arranque nuestro servidor
const init = () =>{
const app = express() //crea una instancia de express
configuracionApi(app) //mandamos acá nuestra instancia, es decir se configura api.

configuracionRouter(app)

app.listen(PORT)
console.log('sed esta ejecutando en el puerto 5000'+ globalConstants.PORT)
}

init();