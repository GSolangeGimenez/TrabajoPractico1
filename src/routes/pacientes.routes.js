//RUTAS DE LOS USUARIOS
const router = require("express").Router()

const pacienteController = require('../controllers/paciente.controller')
//aca se ponen todas las rutas posibles que tengan los /pacientes y para usamos a los controladores
router.post('/:crearpaciente', pacienteController.crearPacientes)
router.get('/:pacientes/1', pacienteController.listarPacientes)

module.exports = router