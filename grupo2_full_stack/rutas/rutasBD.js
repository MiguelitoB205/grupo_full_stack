const express = require('express')
const rutas = express.Router ();
const TiendaMusical =require('../controladores/controladorBD.JS')
const validacion=require('../intermediarias/validaciones')




rutas.get ('/usuarios', TiendaMusical.obtenerUsuarios);
rutas. post ('/usuario', validacion,TiendaMusical.crearUsuario);
rutas.post ('/usuarios/nombre',TiendaMusical.crearUsuario); 
rutas.put ('/usuarios/nombre', TiendaMusical.actualizarUsuarioNombre);
rutas.delete ('/usuarios/nombre', TiendaMusical.eliminaUsuario);

module.exports = rutas;





