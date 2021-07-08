//funciones flecha - arrow funtions
//son funciones mas optimas y seguras que consumen menos recursos
//se declara con const porque esta funcion no debe cambiar en ningun momento
//el const es util por si intentan hackearnos, ya que si intenta cambiarse la estructura de esta
//funcion, el codigo  nos retornará error
const nombreUsuario = () => {
    let nombre = prompt();
    alert(nombre);
    console.log(nombre);
};