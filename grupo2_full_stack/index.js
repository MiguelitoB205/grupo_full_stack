const express = require('express')
const mongoose = require('mongoose')

const path = require('path');
const app = express()
const port = 3000
const rutasPaginas = require('./rutas/rutasPaginas');
const connectDB = require('./conexiones/conexionBD')
const BaseDeDatos = require('./rutas/rutasBD')

app.use(express.static(__dirname + '/frontend'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use('/',rutasPaginas);

app.use('/bd', BaseDeDatos);



app.use((req,res)=> {
res.status(404).send('Pagina no encontrada');
});




    app.use ((err,req,res,next) => {
        console.error(err.stack);
        res.status(500).send('Algo salio mal');
 });

connectDB();

app.listen(port,() => {
    console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
});





















