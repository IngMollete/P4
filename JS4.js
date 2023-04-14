//Scope Global: se refiere a la variable que aplique 
//a todo el mundo. (Las variables globales pueden ser accedidas
//y procesadas por cualquier funcion dentro del codigo)

//Scope local: Se refiere a la variable que aplique solo 
// a la funcion donde se alberge dicha variable. Solo 
//puede ser accedida desde dentro de la misma funcion.

var nombre = "Fabian"; //Esto es una variable global

function nombreCompleto(){
    var apellido= "Whijares"; //Esto es una variable local
    console.log(nombre + "" + apellido)
}

nombreCompleto(); 
