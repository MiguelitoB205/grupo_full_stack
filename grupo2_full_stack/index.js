const express = require('express')

app.set('view engine', 'html')
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})
app.use(express.urlencoded({extended: true}
app.use(express.json())
const validacionFormulario = (req,res,next)=>{
  const nombre = req.body.nombre
  const apellido = req.body.apellido
  const correo = req.body.email;
  const contrasena=req.body.password;
  if(!nombre){
    res.send('Falta el nombre')
  } else if(!apellido){
    res.send("Falta el apellido")
  }
   else if(!correo){
    res.send('Faltó el correo')
  } else if(!contrasena){
    res.send('Faltó la contraseña')
  }
  else{
    next();
  }
}
/******************** */
// midleware de rutas
app.use((req, res, next)=>{
  console.log('Midleware de rutas');
  next();
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname +'/frontend/practica.html')
})
app.get('/registro', (req, res) => {
res.sendFile(__dirname +'/frontend/formulario.html')
})
app.get('/videos', (req, res) => {
res.sendFile(__dirname +'/frontend/videos.html')
})

app.get('/saludo/:nombre', (req,res)=>{
const nombre = req.params.nombre;
res.send(`Hola ${nombre}!`)
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
app.post('/crearUsuario', validacionFormulario, async(req,res)=>{
  const nomb = req.body.nombre
  const apell = req.body.apellido
  const correo = req.body.email
  const contrasena = req.body.password
  const user = new User({nombre: nomb, 
     apellido: apell,
     email: correo, 
     password: contrasena});
  try{
  await user.save()
  res.send('Usuario creado')
  console.log('Usuario creado');
}
catch(err){
  res.send('Error al crear usuario', err)
}}
)
//Obtener todos los usuarios

app.get('/usuarios',async(req, res)=>{
  try{
  const users = await User.find();
  res.send(users)
  console.log(users);
  }
  catch(err){
    res.send('Error al obtener usuarios', err)
  }
})

app.post('/usuario/nombre', async (req, res)=>{
  const nomb = req.body.nombre;
  console.log(nomb);
  try{
  const user = await User.findOne({nombre:nomb})
  if(!user){
    res.send('Usuario no encontrado')
  } else{
    res.send(user)
    console.log(user);
  }
} catch(err){
  res.send('Error al obtener usuario', err);
}
})


app.listen(port, () => {
  console.log(`Servidor activo escuchando el puerto http://localhost:${port}`)
})

