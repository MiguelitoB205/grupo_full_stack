const express = require('express')
const mongoose = require('mongoose')

const path = require('path');
const app = express()
const port = 3000
const rutasPaginas = require('./rutas/rutasPaginas');
const conectDB = require('./conexiones/conexionBD')
const TiendaMusical = require('./rutas/rutasBD')

app.use(express.static(__dirname + '/frontend'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true}));

app.use(express.json())

