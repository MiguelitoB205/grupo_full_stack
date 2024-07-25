const mongoose = require('mongoose');
const Usuario = require('../modelos/modeloBD')

const crearUsuario = async(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    const user = new Usuario({ nombre: nombre, apellido:apellido, correo:correo, contrasena:contrasena})
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
        
    }
}