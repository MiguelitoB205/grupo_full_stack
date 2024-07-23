// crear nuevo registro


async function crearRegistro(){
    const nomb=document.getElementById('nombre').value;
    console.log(nomb);
    const apel = document.getElementById('apellido').value;
    const correo=document.getElementById('email').value;
    const contrasena=document.getElementById('password').value;
    try{
        const respuesta= await axios.post('/crearUsuario',{
            nombre:nomb,
            apellido:apel,
            email:correo,
            password:contrasena })
        document.getElementById('respuesta').innerHTML=respuesta.data;
        if(respuesta.data){
            window.location.href = '/usuarioCreado';
        }
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById('boton').addEventListener('click',crearRegistro);


