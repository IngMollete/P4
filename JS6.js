//Coercion consiste en transformar de un tipo de dato a 
//otro de una variable. Existen dos tipos de coercion:

//Coercion implicita: Consiste en la transformacion de 
//tipos de mediante la ayuda de JavaScript. Esto ocurre en
//operaciones de diferentes tipos, ya que es un lenguaje
//debil y dinamicamente tipado.

var a = 4 + "7"; //Este tipo de valor es string por el "+"
var b = 4 * "7"; //Este tipo de valor es un numero por el "*"

//Coercion explicita: Consiste en la transformacion de tipos
//de datos que controlamos el resultado. Para realizar estas 
//transformaciones utiliza las funciones Number(), String()
//y Boolean(), para convertir a tipo numero, string y logico 
// respectivamente. 

//Number(): Obliga a la variable a convertirse al valor Number
//String(): Obliga a la variable a convertirse al valor String
//Boolean(): Obliga a la variable a convertirse al valor Boolean

var a = 4 + Number(7); //Este tipo de valor es numero por el "Number()"
var b = 4 + String(7); //Este tipo de valor es string por el "String()"
var c = Boolean(0); //Este tipo de valor es booleano por el "Boolean()"
