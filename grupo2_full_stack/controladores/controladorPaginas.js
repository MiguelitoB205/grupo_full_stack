const path = require('path') 
//*********************
 // Servir pagina de inicio
 const pagHome= (req,res)=> {
    res.sendFile (__dirname +  '/frontend/practica.html;')
 };
 
 // Servir pagina de contacto
 const pagFormaPago = (req, res)=>  {
res.sendFile(__dirname + '/frontend/formaPagos.html')
 };
 //Servivios
 const pagRegistro = (req, res)=> {
    res.sendFile(__dirname + '/frontend/registro.html')
 };
 // Pagina de logueo
 const pagLogueo = (req, res)=> {
    res.sendFile(__dirname +  '/frontend/logueo.html')
 };
 // video
 const pagVideos = (req, res)=>  {
    res.sendFile(__dirname +  '/frontend/video.html')
 };
 const pagRegistroExitoso = (req, res)=> {
    res.sendFile(__dirname +  '/frontend/registroExitoso.html')
 };
 // Confirmar
 const pagConfirmarPago = (req, res)=>  {
    res.sendFile(__dirname +  '/frontend/ConfirmacionPago.html')
 };
 