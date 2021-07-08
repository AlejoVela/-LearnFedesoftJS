//validando tipo de variable y valor

let nombre = prompt("Ingrese su  nombre");
let edad = parseInt(prompt("ingrese su edad")); 

//con dos iguales "==" compara por ejemplo "18" y 18 para devolver true
//sin embargo, con 3 iguales "===", se validad el tipo de dato y el valor
//como estamos programando con buenas practicas, es necesario usar el tercer igual
//para validar tanto el valor como tipo de datos ingresado
if (edad===18) {
    alert("tienes acceso al catalogo de peliculas violentas");
} else {
    alert("no tienes acceso al catalogo de peliculas violentas");
}

/**
 * para compraciones como >=, no se debe colocar >== para compara tipos de datos
 * esto se implemento por parte del emscript debido a que en este tipo de comparaciones
 * siempre se realizan a datos númericos
 * 
 * Para el perado !=, si es necesario dejarlo como !== para que compare si son diferentes
 * tanto el valor como tipo de dato
 */

/**
 * === igual valor y tipo de dato
 * ==  igual valor
 * > mayor que
 * < menor que
 * >= mayor igual que
 * <=menor igual que
 * != diferente valor
 * !== diferente valor y tipo de dato
 */