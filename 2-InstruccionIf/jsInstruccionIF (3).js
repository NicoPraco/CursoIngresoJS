function mostrar() {
    //Declaro variables
    var edad;

    //Entrada
    edad = document.getElementById("edad").value;

    //Salida
    if(edad >= 18 && edad <= 100){
        alert("Usted es mayor de edad");
    }else{
        alert("Usted es menor de edad");
    }


}//FIN DE LA FUNCIÓN