module.exports = {
  
    listarMedico: async(req,resp) =>{
        try{
            console.log('ejecutando prueba')
            
            resp.json({
                mesagge:"listado de médicos"
            })

        }catch(err){
            console.log(err)
        }

    },
    crearMedico: async(req,resp) =>{
        try{
            console.log('ejecutando prueba')
            
            resp.json({
                mesagge:"Medico creado con éxito"
            })

        }catch(err){
            console.log(err)
        }

    },

}