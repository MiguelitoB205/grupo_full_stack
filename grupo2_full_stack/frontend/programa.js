async function conexion(){
    try{
        const respuesta = await axios.get('/saludo/juan');
        document.getElementById('respuesta').innerHTML= respuesta.data;
        console.log(respuesta.data);
    }   
     catch (error)  {
        console.log(error);
     } 
    
    }
//***************************************** */
async function llamadaPagina() {
    try  {
        const respuesta = await axios.get('/home');
        console.log(respuesta.data);
    }
            catch (error) {
                console.log(error);
    }
}
//*************************************** */
// crear registro nuevo
async function crearRegistro() {
    if (!validarNombre() || !validarApellido() || !validarEmail() || !validarPassword() || validarCelular()){
        alert("campos invalidos");
    }else  {
        const nomb = document.getElementById('nombre').value
        console.log(nomb);
        const apellido = document.getElementById
    }
    try {
        const respuesta = await axios.post('bd/usuarios',  {
            nombre: nomb,
            email: correo,
            password: contrasena
        })
        document.getElementById('respuesta').innerHTML = respuesta.data;
        if (respuesta.data) {
        window.location.href = '/usuariocreado'; 
    }
    console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
    }
}


document.getElementById('boton').addEventListener('clik', crearRegistro);

//************************************************************ */
// obtener todos los usuarios

async function cargarDatos()  {
    try {
        const respuesta = await axios.get('bd/usuarios')
        if (respuesta.data){
            const userList = document.getElementById('listausuarios');
            userList.innerHTML = '';
            respuesta.data.forEach(user => {
                const option = document.createElement('option');
                option.value = '${user.nombre}';
                option.textContent ='${user.nombre}';
                userList.appendChild(option);
 });
        }
    }
    catch (error)  {
        console.log(error);
    }
    
}

cargarDatos();

//************************************************ */
// obtener un usuario por nombre
async   function buscarUsuario() {
    const nomb = document.getElementById('ListaUsuarios').Value;
    console.log(nomb);
    try {
        const respuesta = await axios.post('bd/usuarios/nombre', {
           nombre: nomb 
        })
    document.getElementById('respuesta').innerHTML = '${respuesta.data.nombre} ${respuesta.data.correo} ${respuesta.data.contrasena}';
    console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
}
}

//*************************** */
// obtener un usuario por nombre desde campo
async function buscarUsuario2() {
    const nomb = document.getElementById('busqueda').value;
    console.log(nom);
    try {
        const respuesta = await axios.post('bd/usuarios/nombre', {
            nombre: nomb
        })
    document.getElementById('respuesta2').innerHTML = `${respuesta.data.nombre} ${respuesta.data.correo}
     ${respuesta.data.contraseña}`;
     console.log(respuesta.data);
    }
catch(error) {
    console.log(error);
}
}
document.getElementById('boton3').addEventListener('click', buscarusuario2);

//***************************************************************** */
// actualizar datos por nombre
async function cargarDatos2() {
    try {
        const respuesta = await axios.get( 'bd/usuarios')
        if(respuesta.data) {
            const userList = document.getElementById('listaUsuarios2');
            userList = innerHTML= '';
            respuesta.data.forEach(user => {
                const option = document.createElement('option');
                option.value = `${user.nombre}`;
                option.textContent = `${user.nombre}`;
                userList.appendChild(option);
            });
        }
   
    }
    catch (error) {
        console.log(error);}
}     
cargarDatos2();

async function llenarDatos() {
    const nomb = document.getElementById('listausuario2').value;
    console.log(nomb);
    try {
    const respuesta= await axios.post('bd/usuarios/nombre' , {
        nombre: nomb
    })
    document.getElementById('nuevoNombre').value =`${respuesta.data.nombre}`;
    document.getElementById('nuevocorreo').value =`${respuesta.data.correo}`;
    document.getElementById('nuevacontrasena').value = `${respuesta.data.contrasena}`;   
    console.log(respuesta.data);
}
catch (error) {
    console.log(error);
}    
}


async function actualizarRegistro() {
    const nomb = document.getElementById('listaUsuarios2').value;
    const nombnuevo = document.getElementById('nuevoNombre').value;
    const corr = document.getElementById('nuevocorreo').value;
    const contra = document.getElementById('nuevaConraseña').value;
try {
const respuesta = await axios.put('bd/usuarios/nombre', {
    nombre: nomb,
nuevonombre: nombnuevo,
nuevocorreo: corr,
nuevopassword: contra
});
   document.getElementById('respuesta3').innerHTML = respuesta.data;
}
   catch (error) {
     console.log(error);
}
document.getElementById('listaUsuarios2').addEventListener( 'change', llenarDatos);
document.getElementById('boton4').addEventListener('click',actualizarRegistro);

//********************************* */
//eliminar usuario
async function cargarDatos3() {
    try  {
const respuesta = await axios.get('bd/usuarios')
if (respuesta.data) {
    const userList = documet.getElementById('ListaUsuarios3');
userList.innerHTML =  '';
respuesta.data. forEach(user => {
    const option = document.createElement('option');
option.value = `${user.nombre}` ;
option.textContent = `${user.nombre}`;
userList.appendChild(option);
});
}
 }  
catch (error) {
    console.log(error);
}
}
cargarDatos3();getElementById('listausuarios3').value;

async function eliminarUsuario() {
    const nomb = document.getElementById('listausuarios3').value;
    console.log(nomb);
    try {
const respuesta = await axios.delete('bd/usuarios/nombre', {
nombre: nomb
})
document.getElementById('repuesta4').innerHTML = repuesta.data;
console.log(respuesta.data);
if (respuesta.data) {
    cargarDatos3();
}
}
catch (error) {
    console.log(error);
}
}

document.getElementById('boton5').addEventListener('clik',eliminarUsuario);

//************************************************ */
//validacion campo nombre

function validarNombre() {
    const nombre = document.getElementById('nombre').value;
    const expresion = /^[A-Za-z]{3,}\s[A-Za-z]{3,}s/
    if (expresion.test(nombre)) {
        document.getElementById('advertencia').innerHTML = 'Nombre correcto';
        return true;
}
   else {
    document.getElementById('advertencia').innerHTML = 'Nombre incorrecto';
    return false;
    
   } 
}

}

document.getElementById('nombre').addEventListener('blur', validarNombre);

//*************************************** */
// validacion campo email
function validarEmail() {
    const email = document.getElementById('email').value;
const expresion =  /^\w+@\w+\.\w+$/
if(expresion.test(email)) {
    document.getElementById('advertencia2').innerHTML =  'Email incorrecto';
    return true;
}
 else { 
    document.getElementById('advertencia2').innerHTML = 'Email incorrecto';
    return false 
 }
}
document.getElementById('email').addEventListener( 'keyup', validaremail);

//************************** */
// validacion campo password
function validarPassword() {
    const password = document.getElementById('password').value;
    const expresion = /^(\?=.*[a-z])(\?=.*[A-Z])(\?=.*\d)[a-zA-Z\d]{8,}$/
}

if (expresion.test(email) {
    document.getElementById('advertencia2').innerHTML =  'Email correcto';
    return true;
})
    

else {
    document.getElementById('advertencia3').innerHTML =  'Password incorrecto';
    return false;
}

document.getElementById('password').addEventListener('keyup'.validarPassword);




