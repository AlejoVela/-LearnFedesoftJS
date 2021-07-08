//variables globales
let letra = document.getElementById("letra");
let numero = document.getElementById("numero");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");

//funciones
const fnA1 = () => {

    if (numero.innerHTML === "" && letra.innerHTML === "AB") {
        numero.innerHTML += "1";
    } else {
        if (letra.innerHTML === "") {
            letra.innerHTML += "A";        
        } else {
            if (letra.innerHTML === "AB" && numero.innerHTML === "12") {
                alert("Ejercicio completado!!!");
            } else {
                alert("faltan letras/numeros por ingresar"); 
            }
        }    
    }
    
};

const fnB2 = () => {

    if (numero.innerHTML === "1") {
        numero.innerHTML += "2";
    } else {
        if (letra.innerHTML === "A") {
            letra.innerHTML += "B";        
        } else {
            if (letra.innerHTML === "AB" && numero.innerHTML === "12") {
                alert("Ejercicio completado!!!");
            } else {
                alert("faltan letras/numeros por ingresar"); 
            }
        }    
    }

    
};


//eventos
btnA1.onclick = function () {
    fnA1();
};

btnB2.onclick = () =>{
    fnB2();
};