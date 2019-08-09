function mostrar() {
    //Declaracion de variables
    var edad;
    var estadoCivil;

    //Entrada
    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    //Salida
    if (edad < 18 && estadoCivil != "Soltero") {
        alert("Usted es muy pequeño para NO ser soltero");
    }

}//FIN DE LA FUNCIÓN