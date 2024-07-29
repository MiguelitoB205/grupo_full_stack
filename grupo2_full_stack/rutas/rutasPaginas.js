const express = require('express');
const rutas = express.Router();
const paginas = require('../controladores/controladorPaginas.js')

rutas.get('/',(req,res)=>{
    res.send('Hola mundo!')
})

rutas.get('/home',paginas.pagHome);
rutas.get('/registro',paginas.pagRegistro);
rutas.get('/logueo', paginas.pagLogueo);
rutas.get('/videos',paginas.pagVideos);
rutas.get('/registroExitoso',paginas.pagRegistroExitoso)
rutas.get('/confirmacionPago',paginas.pagConfirmarPago)

module.exports = rutas;