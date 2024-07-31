//* de creacion******************* */
//validacion para datos de formulario creacion
const validacionFormulario = (req, res, next)=> {
    const nombre = req. body. nombre;
    const apellido = req. body.apellido;
    const correo = req.body.correo;
    const contraseña = req.body.contraseña;
    const  celular = req. body.celular;
    const numeroCuenta = req.body.numeroCuenta;
    if(!nombre)  {
        res.send('falto el nombre');
    }else if(apellido) {
        res.send('falto apellido');
    }else if(correo) {
        res.send('falto correo');
    }else if(contraseña) {
        res.send('falto contraseña');
    }else if(celular) {        
         res.send('falto celular');   
    
    }  else if(numeroCuenta){
        res.send('faltó el número de cuenta')
    }
    else{
        next()
    }

}



module.exports = validacionFormulario;