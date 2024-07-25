const path = require('path') 
//*********************
 // Servir pagina de inicio
 const pagHome= (req,res)=> {
    res.sendFile (__dirname +  '/frontend/practica.html;')
 };
 
 // Servir pagina de contacto
 const pagContacto = (req, res)=>  {
res.sendFile(__dirname + '/frontend/formaPagos.html')
 };
 //Servivios
 const paginaRegistro = (req, res)=> {
    res.sendFile(__dirname + '/frontend/registro.html')
 };
 // Pagina de logueo
 const paginaLogueo = (req, res)=> {
    res.sendFile(__dirname +  '/frontend/logue.html')
 };
 // video
 const paginaVideo = (req, res)=>  {
    res.sendFile(__dirname +  '/frontend/video.html')
 };
 const paginaRegistroExitoso = (req, res)=> {
    res.sendFile(__dirname +  '/frontend/registroExitoso.html')
 };
 // Confirmar
 const paginaConfirmarPago = (req, res)=>  {
    res.sendFile(__dirname +  '/frontend/ConfirmacionPago.html')
 };
 