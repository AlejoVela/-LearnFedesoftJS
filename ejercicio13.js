//operaciones

const suma = () =>{
    let num1 = prompt("Ingrese número 1");
    let num2 = prompt("Ingrese número 2");
    //recordemos que prompt resive cadenas string mas no datos

    //tambien podemos colocar el "parseFloat" al recivir los datos desde el prompt
    //De hecho es una buena practica realizarlo de esa manera
    let resultado = parseFloat(num1)+parseFloat(num2);
    alert(resultado);
    console.log(resultado);
}