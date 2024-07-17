// crear nuevo registro
/*async function crearUsuario(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('email').value;
    const contrasena = document.getElementById('password').value;
    try{
        const respuesta = await axios.post('/crearUsuario',{
            nombre: nombre,
            apellido: apellido,
            email:correo,
            password:contrasena
            })
            document.getElementById('respuesta').innerHTML=respuesta.data;
            console.log(respuesta.data);
            if(respuesta.data){
                document.getElementById('boton').style.display="none";
                document.getElementById('respuesta').innerHTML="Gracias por registrarte";
            }
    } catch(error){
        console.log(error);
    }
}
document.getElementById('boton').addEventListener('click', crearUsuario)

// listar usuarios

async function cargarDatos() {
    try{
        const respuesta= await axios.get('/usuarios')        
    if (respuesta.data) {           
      const userList = document.getElementById('listaUsuarios');
      userList.innerHTML = ''; 
        respuesta.data.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = `${user.nombre}& ${user.apellido} & ${user.correo}`;
        userList.appendChild(option);
      });
    }
}
catch(error){
    console.log(error); 
  }      
}
cargarDatos()

async function confirmarPago(){
    
    const numeroCuenta = document.getElementById('numeroCuenta')

    try{
        const confirmacionPago = await axios.post('/pagarAlbum',{
            numeroCuenta: numeroCuenta
        })
        document.getElementById('confirmacionPago').innerHTML=confirmacionPago.data
    } catch(error){
        
    }



}*/

function validarRegistro(){
    let nombre = document.forms["registro"]["nombre"].value;
    let apellido = document.forms["registro"]["apellido"].value;
    let email = document.forms["registro"]["email"].value;
    let password = document.forms["registro"]["password"].value;
    let celular = document.forms["registro"]["celular"].value;
    if(nombre=="" && apellido=="" && email=="" &&password=="" && celular==""){
        alert("Falta completar el formulario")
        return false
    } 
}

