

/*function miArray(){
    const albumes = [{
        nombre: "Cerca de tí", artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
    },
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
},
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
},
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
},
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
},
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
},
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
},
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
},
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
},
{
    nombre: "Cerca de tí",img:'/img/cerca_de_ti.jpeg', artista: "Jesús Adrián Romero", anio: 1999, genero: "Alabanza a Dios"
}]
    document.getElementById("caja").innerHTML
}*/


function negro(titulo){
    titulo.style.color="black"
    titulo.style.backgroundColor="grey"
}

function gris(titulo){
    titulo.style.color="grey"
    titulo.style.backgroundColor="black"
}
let numA,numB,resultado;

function obtenerValores(){
    document.getElementById('advertencia').style.display="none"
    numA = parseFloat(document.getElementById('operandoA').value)
    console.log(numA);
    numB = parseFloat(document.getElementById('operandoB').value)
    console.log(numB);
}

function sumar(A,B){
    let res;
    res = A+B;
    return res
}
function restar(A,B){
    let res;
    res = A-B;
    return res
}
function multiplicar(A,B){
    let res;
    res = A*B;
    return res
}

function dividir(A,B){
    let res;
    res = A/B;
    return res
}

function desplegarResultado(resultado){
    document.getElementById('resultado').value=resultado
}
function operarSuma(){
    obtenerValores();
    resultado=sumar(numA,numB);
    desplegarResultado(resultado)
}
function operarResta(){
    obtenerValores();
    resultado=restar(numA,numB);
    desplegarResultado(resultado)
}
function operarMultiplicacion(){
    obtenerValores();
    resultado=multiplicar(numA,numB);
    desplegarResultado(resultado)
}

function operarDivision(){
    obtenerValores();
    if(numB===0){
        desplegarResultado("Error")
        document.getElementById('advertencia').style.display="block"
        document.getElementById('advertencia').innerHTML="Operando B no puede ser cero"
        alert('No se puede dividir entre cero')
        
    }else{
    resultado=dividir(numA,numB);
    desplegarResultado(resultado)
    }
}
document.getElementById('botonsumar').addEventListener('click', operarSuma)
document.getElementById('botonrestar').addEventListener('click', operarResta)
document.getElementById('botonmultiplicar').addEventListener('click', operarMultiplicacion)
document.getElementById('botondividir').addEventListener('click', operarDivision)

function operar(){
    let operacion = document.getElementById('selectorOperacion').value;
    console.log(operacion);
    obtenerValores();
    
    if(operacion=="sumar"){
        resultado=sumar(numA, numB)
    } else if(operacion=="restar"){
        resultado=restar(numA,numB)
    } else if(operacion=="multiplicar"){
        resultado=multiplicar(numA,numB)
    } else if(operacion=="dividir"){
        resultado=dividir(numA,numB)
    } else{
        resultado = "Operación no válida"
    }
    
    desplegarResultado(resultado);
    }