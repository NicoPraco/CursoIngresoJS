function mostrar() {
    //Declaracion de variables
    var mes;
    var mensaje;

    //Entrada
    mes = document.getElementById("mes").value;

    //Procesamiento
    switch (mes) {
        case "Febrero":
            mensaje = "Este mes no tiene más de 29 días."
            break;
        default:
            mensaje = "Este mes tiene 30 o más días"
            break;
            
    }

    //Salida
    alert(mensaje);

}//FIN DE LA FUNCIÓN