//ejemplo funcional switch
let nombre = prompt("Ingresa tu nombre");
let color = prompt("Ingresa tu color favorito");

const colorFavorito = (fav) => {
    alert("tu color favorito es el " + fav);
    //return "tu color favorito es el " + fav;
};

switch (color) {
    case "amarillo":
        colorFavorito("amarillo")
        //alert(colorFavorito("amarillo"));
        break;
    case "azul":
        colorFavorito("azul")
        //alert(colorFavorito("azul"));
        break;
    default:
        alert("ha seleccionado una opcion invalida");
        break;
}


