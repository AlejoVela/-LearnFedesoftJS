//condicionales switch

let nombre = prompt("Ingrese su  nombre");
let edad = prompt("ingrese su edad"); 
//todo lo que llega desde el prompt, es tomado como un extring



//el switch  para casos como este es inutil, por ello no se suele usar mucho.
switch (edad) {
    case "18":
        alert("tienes acceso al catalogo de peliculas violentas");
        break;
    default:
        alert("no tienes acceso al catalogo de peliculas violentas");
        break;
}
