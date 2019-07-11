function mostrar() {
    //Declaracion de variables
    var edad;
    var estadoCivil;

    //Entrada
    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    //Salida
    if (edad >= 18 && estadoCivil == "Soltero") {
        alert("Es soltero y no es menor");
    }

}//FIN DE LA FUNCIÓN