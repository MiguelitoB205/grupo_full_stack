const mongoose = require('mongoose');
const Usuario = require('../modelos/modeloBD')

const crearUsuario = async(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    const celular = req.body.celular;
    const user = new Usuario({ nombre: nombre, apellido:apellido, correo:correo, contrasena:contrasena,
        celular:celular
    })
    try {
        await user.save()
        res.send('Usuario creado');
        console.log('Usuario creado');
    }
    catch (err){
        res.send('Error al crear usuario', err);

    }
};

const obtenerUsuarios = async (req, res) =>{
    try {
        const users = await Usuario.find();
        res.send(users);
        console.log(users);
        
    } 
    catch(err){
        res.send('Error al obtener usuarios', err)
    }
}

const obtenerUsuarioNombre = async (req,res)=>{
    const nomb = req.body.nombre;
    console.log(nomb);
    try{
        const user = await Usuario.findOne({nombre:nomb});
        if(!user){
            res.send('Usuario no encontrado')
        } else {
            res.send(user);
            console.log(user);
        }
    } catch(err){
        res.send('Error al obtener usuario, intentalo de nuevo', err);
    }
}