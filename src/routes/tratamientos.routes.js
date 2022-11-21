const router = require("express").Router()

const tratamientosController = require('../controllers/tratamientos.controller')
//aca se ponen todas las rutas posibles que tengan los medicos y para usamos a los controladores
router.get('/', tratamientosController.listarTratamiento)
router.post('/', tratamientosController.crearTratamiento)

module.exports = router