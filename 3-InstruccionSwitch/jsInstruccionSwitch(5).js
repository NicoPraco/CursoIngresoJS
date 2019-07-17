function mostrar() {
    //Declaracion de variables
    var hora;
    var mensaje;

    //Entrada
    hora = document.getElementById("hora").value;

    //Procesamiento
    switch (hora) {
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            mensaje = "Es de mañana";
            break;

    }

    //Salida
    alert(mensaje);

}//FIN DE LA FUNCIÓN