//esto va a tener la funcionalidad de los diferentes endpoint de los tratamientos. Es el controlador de los tratamientos.

module.exports = {
    
    

    crearTratamiento: async(req,resp) =>{
        try{
            console.log('ejecutando prueba')
            
            resp.json({
                mesagge:"tratamientos:"
            })

        }catch(err){
            console.log(err)
        }
    },
    listarTratamiento: async(req,resp) =>{
        try{
            console.log('ejecutando prueba')
            
            resp.json({
                mesagge:"tratamiento creado con éxito "
            })

        }catch(err){
            console.log(err)
        }
    },

}