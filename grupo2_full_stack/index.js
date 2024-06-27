const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/paginas'))
app.set('view engine', 'html')
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})
app.use(express.urlencoded({extended: true}))

app.use((req, res, next)=>{
    console.log('Midleware de rutas');
    next();
  })
  
  const validacionFormulario = (req,res,next)=>{
    const nombre = req.body.nombre
    const correo = req.body.email;
    const contrasena=req.body.password;
    if(!nombre){
      res.send('Falta el nombre')
    } else if(!correo){
      res.send('Faltó el correo')
    } else if(!contrasena){
      res.send('Faltó la contraseña')
    }
    else{
      next();
    }
  }

  
  app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/paginas/practica.html')
})

app.get('/registro', (req, res)=>{
  res.sendFile(__dirname + '/paginas/formulario.html')
})

app.get('/videos', (req, res)=>{
  res.sendFile(__dirname + '/paginas/videos.html')
})

app.get('/saludo/:nombre', (req,res)=>{
  const nombre = req.params.nombre;
  res.send('Hola ${nombre}!')
})

app.post('/formulario',validacionFormulario, (req, res)=>{
  const nombre = req.body.nombre
  const correo = req.body.email
  const contrasena = req.body.password
  console.log('Hola ${nombre}! tu correo es ${correo} y tu contraseña es ${contrasena}');
  res.send('Hola ${nombre}! tu correo es ${correo} y tu contraseña es ${contrasena}')
})




app.get('/', (req, res) => {
  res.send('Creando el proyecto integrador')
})

app.listen(port, () => {
  console.log ('Escuchando el puerto ${port}')
})