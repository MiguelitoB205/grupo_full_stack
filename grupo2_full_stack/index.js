const express = require('express')
const app = express()
const port = 3000

/***************************** */
// midleware 
app.use(express.static(__dirname + '/frontend'))
app.set('view engine', 'html')
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})
app.use(express.urlencoded({extended: true}))
//app.use(express.json())

/******************** */
// midleware de rutas
app.use((req, res, next)=>{
  console.log('Midleware de rutas');
  next();
})

const validacionFormulario = (req,res,next)=>{
  const nombre = req.body.nombre
  const apellido = req.body.apellido
  const correo = req.body.email;
  const contrasena=req.body.password;
  if(!nombre){
    res.send('Falta el nombre')
  } else if(!apellido){
    res.send('Faltó el apellido')
  }  else if(!correo){
    res.send('Faltó el correo')
  } else if(!contrasena){
    res.send('Faltó la contraseña')
  }
  else{
    next();
  }
}


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
app.post('/formulario', validacionFormulario, (req,res)=>{
  const nom = req.body.nombre;
  const ape = req.body.apellido;
  const corr = req.body.email;
  const contr=req.body.password;
  cont = cont+1;
  console.log(`Hola ${nom} ${ape}! tu correo es ${corr} y tu contraseña es ${contr}`);
  const persona1={id:cont, nombre:nom, apellido:ape,correo:corr, contrasena:contr};
  personas.push(persona1);
  res.send(`Hola ${nom} ${ape}! tu correo es ${corr} y tu contraseña es ${contr}`)
})


//CRUD PARA PERSONAS

const personas =[{id:1,nombre : "Miguel", correo: "miguelyehudi12@gmail.com", contrasena: "123456"}]
let cont = 1;

app.get('/api/personas', (req,res)=>{
  console.log(personas);
  res.json(personas)
})

app.post('/api/personas/usuario',(req,res)=>{
  const id=req.body.id;
  const persona=personas.find((persona)=>persona.id==id)
  if(!persona){
    res.status(404).send('No se encontraron personas')
  } else{
    console.log(persona);
  res.json(persona)
  }
  

})



app.listen(port, () => {
  console.log(`Servidor activo escuchando el puerto http://localhost:${port}`)
})
