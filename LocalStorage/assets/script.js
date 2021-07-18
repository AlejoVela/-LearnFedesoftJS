let $datos = document.getElementById("datos");
let $nombre = document.getElementById("nombre");


//funtions
const ingresarDatos = () => {
    let nombre = prompt("Ingrese su nombre");
        
    if (nombre == null || nombre==="") {
        validarStorage();
    } else {
        //guardamos en local storage, usamos comillas simples
        //dentro de estas comillas indicamos el nombre
        //del local storage que creamos y le asignamos el valor
        //con la variable nombre
        //no podemos usar otro local storage con este nombre o 
        //estariamos reemplazando sus valores
        $nombre.innerHTML = "Nombre: " + nombre;
        localStorage.setItem('nombre', nombre);  
        //localStorage.removeItem(); <- para remover datos
    }
};


const validarStorage = () => {
    if (localStorage.getItem('nombre')) {
        $nombre.innerHTML = "Nombre: " + localStorage.getItem("nombre");
    } else {
        $nombre.innerHTML = "Nombre: 'Sin datos'";
    }
};




//validamos si existe una variable en el local storage con el nombre "nombre"
//siempre retorna string
validarStorage();


//events
$datos.onclick = function () {
    ingresarDatos();
};