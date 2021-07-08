//manejo del doom usando un div con id="datos"
/**Buenas practicas
 * el id debe ser unico para cada etiqueta, los class si pueden repetirse muchas veces
 * por lo que suelen ser usados en css y los id se dejan unicamente en javascript
 */

//variables globales
let datos = document.getElementById("datos");
/*
document hace referencia al archivo HTML en el cual esta siendo invocado el archivo javascript
getElementById -> obtenemos un elemento por medio de un id especifico, ingresamos como parametro el id
*/

const nombreUsuario = () => {
    let nombre = prompt();
    alert(nombre);
    console.log(nombre);
};




//con onclick y event añadimos eventos a java, se recomiendo colocar los onclick o
//eventos de ultimas en el archivo
//usando una funcion vacia
datos.onclick = function () {
    nombreUsuario();
}
