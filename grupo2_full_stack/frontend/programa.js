// crear nuevo registro

async function crearUsuario(){
    const nombre = document.getElementById('nombre').value;
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
    } catch(error){
        console.log(error);
    }
}

document.getElementById('boton').addEventListener('click', crearRegistro)