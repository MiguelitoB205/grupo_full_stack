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
    if (!validarNombre() || !validarApellido() || !validarEmail() || !validarPassword() || !validarCelular() ||!validarNumeroCuenta() ){
        alert("campos invalidos");
    }else  {
        const nomb = document.getElementById('nombre').value
        console.log(nomb);
        const apellido = document.getElementById('apellido').value
        const correo = document.getElementById('correo').value
        const contrasena = document.getElementById('contraseña').value
        const celular = document.getElementById('celular').value;
        const numeroCuenta = document.getElementById('numeroCuenta').value;
        try {
            const respuesta = await axios.post('bd/usuarios',  {
                nombre: nomb,
                apellido : apellido,
                correo: correo,
                contrasena: contrasena,
                celular: celular,
                numeroCuenta: numeroCuenta
            })
            document.getElementById('respuesta').innerHTML = respuesta.data;
            if (respuesta.data) {
            window.location.href = '/usuarioCreado'; 
            }
       
            console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
    }
 }
    }
document.getElementById('boton').addEventListener('click', crearRegistro);



//************************************************************ */
// obtener todos los usuarios

async function cargarDatos()  {
    try {
        const respuesta = await axios.get('bd/usuarios')
        if (respuesta.data){
            const userList = document.getElementById('listaUsuarios');
            userList.innerHTML = '';
            respuesta.data.forEach(user => {
                const option = document.createElement('option');
                option.value = `${user.nombre}`;
                option.textContent =`${user.nombre}`;
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
    const nomb = document.getElementById('listaUsuarios').value;
    console.log(nomb);
    try {
        const respuesta = await axios.post('bd/usuarios/nombre', {
           nombre: nomb 
        })
    document.getElementById('respuesta').innerHTML = `${respuesta.data.nombre} ${respuesta.data.apellido} ${respuesta.data.correo} ${respuesta.data.contrasena} ${respuesta.data.celular} ${respuesta.data.numeroCuenta}`;
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
    console.log(nomb);
    try {
        const respuesta = await axios.post('bd/usuarios/nombre', {
            nombre: nomb
        })
    document.getElementById('respuesta2').innerHTML = `${respuesta.data.nombre} ${respuesta.data.apellido} ${respuesta.data.correo}
     ${respuesta.data.contrasena} ${respuesta.data.celular} ${respuesta.data.numeroCuenta}`;
     console.log(respuesta.data);
    }
catch(error) {
    console.log(error);
}
}
document.getElementById('boton3').addEventListener('click', buscarUsuario2);

//***************************************************************** */
// actualizar datos por nombre
async function cargarDatos2() {
    try {
        const respuesta = await axios.get( 'bd/usuarios')
        if(respuesta.data) {
            const userList = document.getElementById('listaUsuarios2');
            userList.innerHTML= '';
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
    document.getElementById('nuevonombre').value =`${respuesta.data.nombre}`;
    document.getElementById('nuevoapellido').value = `${respuesta.data.apellido}`
    document.getElementById('nuevocorreo').value =`${respuesta.data.correo}`;
    document.getElementById('nuevacontrasena').value = `${respuesta.data.contrasena}`;  
    document.getElementById('nuevocelular').value =  `${respuesta.data.celular}`
    document.getElementById('nuevonumeroCuenta').value = `${respuesta.data.numeroCuenta}`
    console.log(respuesta.data);
}
catch (error) {
    console.log(error);
}    
}


async function actualizarRegistro() {
    const nomb = document.getElementById('listaUsuarios2').value;
    const nombnuevo = document.getElementById('nuevonombre').value;
    const apel = document.getElementById('nuevoapellido').value;
    const corr = document.getElementById('nuevocorreo').value;
    const contra = document.getElementById('nuevacontraseña').value;
    const cel = document.getElementById('nuevocelular').value;
    const numCuenta = document.getElementById('nuevonumeroCuenta').value;
try {
const respuesta = await axios.put('bd/usuarios/nombre', {
    nombre: nomb,
nuevonombre: nombnuevo,
nuevoapellido: apel,
nuevocorreo: corr,
nuevacontrasena: contra,
nuevocelular: cel,
nuevonumeroCuenta: numCuenta
});
   document.getElementById('respuesta3').innerHTML = respuesta.data;
}
   catch (error) {
     console.log(error);
}
}
document.getElementById('listaUsuarios2').addEventListener( 'change', llenarDatos);
document.getElementById('boton4').addEventListener('click',actualizarRegistro);

//********************************* */
//eliminar usuario
async function cargarDatos3() {
    try  {
const respuesta = await axios.get('bd/usuarios')
if (respuesta.data) {
    const userList = document.getElementById('listaUsuarios3');
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
cargarDatos3()

async function eliminarUsuario() {
    const nomb = document.getElementById('listaUsuarios3').value;
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
    const expresion = /^[A-Za-z]{3,}\s[A-Za-z]{3,}$/
    if (expresion.test(nombre)) {
        document.getElementById('advertencia').innerHTML = 'Nombre correcto';
        return true;
}
   else {
    document.getElementById('advertencia').innerHTML = 'Nombre incorrecto';
    return false;
    
   } 
}
document.getElementById('nombre').addEventListener('blur', validarNombre);

function validarApellido(){
    const apellido = document.getElementById('apellido').value;
    const expresion =/^[A-Za-z]{3,}\s[A-Za-z]{3,}$/
    if(expresion.test(apellido)){
        document.getElementById('advertencia2').innerHTML = "Apellido correcto"
        return true;
    } else{
        document.getElementById('advertencia2').innerHTML = "Apellido incorrecto";
        return false
    }
}
document.getElementById('apellido').addEventListener('blur',validarApellido )

//*************************************** */
// validacion campo email
function validarEmail() {
    const email = document.getElementById('correo').value;
const expresion =  /^\w+@\w+\.\w+$/
if(expresion.test(email)) {
    document.getElementById('advertencia3').innerHTML =  'Email correcto';
    return true;
}
 else { 
    document.getElementById('advertencia3').innerHTML = 'Email incorrecto';
    return false 
 }
}
document.getElementById('correo').addEventListener( 'keyup', validarEmail);

//************************** */
// validacion campo password
function validarPassword() {
    const password = document.getElementById('contraseña').value;
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if (expresion.test(password)) {
        document.getElementById('advertencia4').innerHTML = 'Contraseña correcta';
        return true;
    } else {
        document.getElementById('advertencia4').innerHTML = 'Contraseña incorrecta';
        return false;
    }
}
document.getElementById('contraseña').addEventListener('keyup',validarPassword);

function validarCelular(){
    const celular = document.getElementById('celular').value;
    const expresion = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    if(expresion.test(celular)){
        document.getElementById('advertencia5').innerHTML = "Celular correcto"
        return true;
    } else{
        document.getElementById('advertencia5').innerHTML = "Celular incorrecto"
        return false;
    }

}
document.getElementById('celular').addEventListener('keyup', validarCelular)

function validarNumeroCuenta(){
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const expresion = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    if(expresion.test(numeroCuenta)){
        document.getElementById('advertencia6').innerHTML = "Número de cuenta correcto"
        return true;
    } else{
        document.getElementById('advertencia6').innerHTML = "Número de cuenta incorrecto"
        return false
    }
}
document.getElementById('numeroCuenta').addEventListener('keyup', validarNumeroCuenta)


