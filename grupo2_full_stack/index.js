const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const port = 3300


app.use(express.static(__dirname + '/frontend'));
app.set('view engine', 'html')
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})
app.use(express.urlencoded({extended: true}))
app.use(express.json())


/******************** */
// midleware de rutas
app.use((req, res, next)=>{
  console.log('Midleware de rutas');
  next();
})

const validacionFormulario = (req, res, next) => {
  const nombre = req.body.nombre;  
  const correo = req.body.email;
  const contrasena = req.body.password;
  if (!nombre) {
    res.send('falto el nombre');
  } else if (!correo) {
    res.send('falto el correo');
  } else if (!contrasena) {
    res.send('falto la contraseña');
  }
  else {
    next();
  }
}

app.get('/home', (req, res) => {
  res.sendFile(__dirname +'/frontend/practica.html')
})

app.get('/videos', (req, res) => {
res.sendFile(__dirname +'/frontend/videos.html')
})
app.get('/formas_pago', (req, res)=>{
  res.sendFile(__dirname + '/frontend/formaPagos.html')
})
app.get('/confirmacion_pago',(req,res)=>{
  res.sendFile(__dirname + '/frontend/confirmacionPago.html')
})





// conexión a la base de datos

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/TiendaMusical')
    .then(()=> console.log('Conexión a MongoDB establecida'));
  }
  catch(err){
    console.error('Error al conectar a MongoDB: ', err);
  }
}

connectDB();

// esquema de BD
const Schema = mongoose.Schema;
const userSchema = new Schema({
  nombre: String,
  apellido: String,
  correo: String,
  contrasena: String
})

const User = mongoose.model('User', userSchema)

//Crear nuevo usuario
app.post('/crearUsuario', validacionFormulario, async (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.email;
  const contrasena = req.body.password;
  const user = new User({ nombre: nombre, correo: correo, contrasena: contrasena });
  try {
    await user.save()
    res.send('Usuario creado');
    console.log('Usuario creado');
  }
  catch (err) {
    res.send('Error al crear usuario', err);
  }
})

//*************************************** */
//      Ruta para usuario creado
app.get('/usuarioCreado', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/confirmacionPago.html'));
});



app.listen(port, () => {
  console.log(`Servidor activo escuchando el puerto http://localhost:${port}`)
})

