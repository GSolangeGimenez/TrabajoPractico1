//esto va a tener la funcionalidad de los diferentes endpoint de los pacientes. Es el controlador de los pacientes.

module.exports = {
    
    listarPacientes: async(req,resp) =>{
        try{
            console.log('ejecutando prueba')
            
            resp.json({
                mesagge:"Listado de pacientes:"
            })

        }catch(err){
            console.log(err)
        }

    },
    crearPacientes: async(req,resp) =>{
        try{
            console.log('ejecutando prueba')
            
            resp.json({
                mesagge:" Pacientes creados con éxito"
            })

        }catch(err){
            console.log(err)
        }

}
}