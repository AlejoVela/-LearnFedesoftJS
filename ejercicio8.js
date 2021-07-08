//CamelCase -> estandar de scritura, indica que para la nomenclatura de funciones
//se debe iniciar en minusculas y las palabras sub-secuentasiniciaran con letra mayusculas
//Usaremos este por estandar y buenas practicas
function nombreUsuario(){
    let nombre = prompt();
    alert(nombre);
    console.log(nombre);
}

/* 
    Para ejecutar la funcion desde html   incluimos esto:
    <button onclick="nombreUsuario()">Ingresar datos</button>
    <script src="ejercicio8.js"></script>

    sin embargo es mala practica usar onclick desde el html por 2 razones
    1. se puede dar el caso en que tengamos dos funciones homonimas
    2. debemos programar defensivamente, es decir dar menos informacion
    en este caso al dejar el nombre de nuestra funcion en el codigo fuente html
    este es totalmente visible para cualquier persona y por ende inseguro
*/