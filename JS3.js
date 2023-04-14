//Funciones: En JavaScript tenemos 2 tipos de funciones:


//Funciones Declarativas: En las funciones declarativas, 
//utilizamos la palabra reservada "function" al inicio 
//para poder declarar la funcion: 

function miPrimerafuncion(){
    return 3;
}

miPrimerafuncion();

//Funciones anonimas: En la funcion anonima, la 
//declaracion se incia con la palabra reservada "var"
//donde se generara una variable que guardara 
//una funcion anonima.

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre("Mollete");

//Otros ejemplos de funciones:
function saludoEstudiante(Estudiante) {
    console.log(`Hola ${Estudiante}`);
}

function sumar(a,b) {
    var resultado = a+b;
     return resultado;
 }

 //La diferencia entre las Funciones declarativas y las 
 //Funciones anonimas es que a las funciones declarativas
 //se le aplica hoisting (Revisar JS5.js), y a la 
 //funcion anonima no, ya que el hoisting solo se aplica
 //en las palaras reservadas var y function. 