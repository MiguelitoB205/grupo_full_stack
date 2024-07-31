const express = require('express')
const rutas = express.Router ();
const BaseDeDatos =require('../controladores/controladorBD.js')
const validacion=require('../intermediarias/validaciones')




rutas.get ('/usuarios', BaseDeDatos.obtenerUsuarios);
rutas.post ('/usuarios', validacion,BaseDeDatos.crearUsuario);
rutas.post ('/usuarios/nombre',BaseDeDatos.crearUsuario); 
rutas.put ('/usuarios/nombre', BaseDeDatos.actualizarUsuarioNombre);
rutas.delete ('/usuarios/nombre', BaseDeDatos.eliminarUsuarioNombre);

module.exports = rutas;







