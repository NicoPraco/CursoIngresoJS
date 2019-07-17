function mostrar() {
    //Declaracion de variables
    var mes;
    var mensaje;

    //Entrada
    mes = document.getElementById("mes").value;

    //Procesamiento
    switch (mes) {
        case "Febrero":
            mensaje = "Este mes tiene 28 días.";
            break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":

            mensaje = "Este mes tiene 30 días."
            break;

        default:
            mensaje = "Este mes tiene 31 días."
            break;

    }
    
    //Salida
    alert(mensaje);

}//FIN DE LA FUNCIÓN