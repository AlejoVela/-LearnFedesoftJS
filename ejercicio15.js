const suma = () =>{
    let num1 = parseFloat(prompt("Ingrese número 1"));
    let num2 = parseFloat(prompt("Ingrese número 2"));

    let resultado = num1+num2;
    alert(resultado);
    console.log(resultado);
}

const resta = () =>{
    let num1 = parseFloat(prompt("Ingrese número 1"));
    let num2 = parseFloat(prompt("Ingrese número 2"));

    let resultado = num1-num2;
    alert(resultado);
    console.log(resultado);
}

const multiplicacion = () =>{
    let num1 = parseFloat(prompt("Ingrese número 1"));
    let num2 = parseFloat(prompt("Ingrese número 2"));

    let resultado = num1*num2;
    alert(resultado);
    console.log(resultado);
}

const division = () =>{
    let num1 = parseFloat(prompt("Ingrese número 1"));
    let num2 = parseFloat(prompt("Ingrese número 2"));

    if(num2!==0){
        let resultado = num1/num2;
        alert(resultado);
        console.log(resultado);
    }else{
        alert("no es posible dividir entre cero");
        console.log("no es posible dividir entre cero");
    }
}