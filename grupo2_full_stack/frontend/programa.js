// crear nuevo registro
async function crearUsuario(){
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