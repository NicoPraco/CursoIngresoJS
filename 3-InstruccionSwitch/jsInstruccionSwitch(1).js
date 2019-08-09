function mostrar() {
    //Declaracion de variables
    var mes;

    //Entrada
    mes = document.getElementById("mes").value;

    //Procesamiento
    switch (mes) {
        case "Enero":
            alert("Que comiences bien el año!!");
            break;

        case "Marzo":
            alert("A clases!!");
            break;

        case "Julio":
            alert("Se vienen las vacaciones!!");
            break;

        case "Diciembre":
            alert("Felices Fiestas!!!");
            break;  
        default:
            alert("Hola");
            break;

    }




}//FIN DE LA FUNCIÓN