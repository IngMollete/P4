//Hoisting es cuando las variables y las funciones se 
//procesan antes de que se ejecute cualquier tipo de codigo

//console.log es una funcion que da el navegador,
//funciona para imprimir variables, resultados de funciones
//y es para revisar cual es el valor de lo que se busque

//El Hoisting sucede en ECMAScript 5 para abajo, de ECMAScript 6
//en adelante no sucede ya que el Hoisting 
//se da por "var" y "function", y en ECMAScript 6 se integran
//const y let.   

//Para evitar el Hoisting, las buenas practicas serian:
// 1.- Declarar variables al inicio del codigo
// 2.- Declarar funciones en el medio del codigo
// 3.- Utilizar y ejecutar las funciones o variables al final 
//     del codigo. 

//El Hoisting se da en variables ya que la consola interpreta 
//la variable no declarada como "undefined".

var miNombre = undefined;
console.log(miNombre + " " + "Soy el hoisting");
miNombre = "Fabian";

//En cambio en funciones, la funcion se eleva y se ejecuta 
//primero, ya que JavaScript guarda la funcion en memoria 
//en la fase de creacion de un contexto de ejecucion. 

miNombre=undefined;
hey();

function hey(){
    console.log("Hola " + miNombre);
}
var miNombre = "Fabian";
