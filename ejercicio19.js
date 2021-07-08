//variables
let $ope = document.getElementById("op");

//funciones
const validarOpcion = () => {
    let op = prompt(
        "Escribre: \n1 - Para sumar\n2 - Resta\n3 - Multiplicación\n4 - Division"
    );
    
    if (op !== "1" && op !== "2" && op !== "3" && op !== "4" ) {
        alert("Favor ingresar una opción validad de 1 a 4");
    } else {
        let num1 = parseFloat(prompt("Ingrese el número 1"));
        let num2 = parseFloat(prompt("Ingrese el número 2"));
        //es buena practica siempre inicializar las variables con un valor, 
        //esto sirve para a signar el tipo de dato a la variable para no
        //obtener tipos de datos como null - undefine - NaN
    
        let resultado = 0; 
    
        if (op === "1") {
            resultado = num1 + num2;
        } else if (op === "2") {
            resultado = num1 - num2;
        } else if (op === "3") {
            resultado = num1 * num2;
        } else if (op === "4") {
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return "No se puede dividir entre cero";
            }
        }
        return "El resulotado es " + resultado;
    }
}


//es buena practica usar funciones anonimas para eventos
//eventos
$ope.onclick = function () {
    alert(validarOpcion());
};


