//variables globales
let datos = document.getElementById("datos");
let nombre = document.getElementById("nombre");


//funciones
const nombreUsuario = () => {
    let nomUser = prompt();
    nombre.innerHTML = "Bienvenido/a "+ nomUser;

    //alert(nombre);
    console.log("Bienvenido/a "+ nomUser);
};




//eventos
datos.onclick = function () {
    nombreUsuario();
}