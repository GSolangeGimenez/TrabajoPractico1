//RUTAS DE LOS MEDICOS
const router = require("express").Router()

const medicoController = require('../controllers/medico.controller')
//aca se ponen todas las rutas posibles que tengan los medicos y para usamos a los controladores
router.get('/', medicoController.listarMedico)
router.post('/', medicoController.crearMedico)

module.exports = router