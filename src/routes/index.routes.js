//SE ENCARGA DE CONECTAR TODAS LAS RUTAS
const { Router} = require('express')

const pacientesRoutes = require("./pacientes.routes")
const medicosRoutes = require("./medico.routes")
const tratamientosRoutes = require("./tratamientos.routes")
const rutas_init = () =>{

  const router = Router()

  router.use("/usuarios", pacientesRoutes)
  router.use("/medicos", medicosRoutes)
  router.use("/tratamientos", tratamientosRoutes)

  return router
}
module.exports= {rutas_init}