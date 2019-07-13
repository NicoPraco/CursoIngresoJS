function mostrar() {
    var planeta;
    var mensaje;

    planeta = prompt("Ingrese un planeta");

    switch(planeta){
            case "mercurio":
            case "venus":
                mensaje = "Acá hace mas calor";
                break;

            case "tierra":
                mensaje = "Acá vivimos";
                break;

            case "marte":
            case "jupiter":
            case "saturno":
            case "urano":
            case "neptuno":
            case "plutón":
                mensaje = "Acá hace mas frio";
                break;

            default:
                mensaje = "El nombre ingresado no corresponde a un planeta"
                break;

    }

    alert(mensaje);

}
