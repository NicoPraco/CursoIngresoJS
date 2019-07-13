function mostrar() {
    var num1;
    var num2;
    var resultado;

    num1 = prompt("Ingrese un número");
    num2 = prompt("Ingrese un número");

    if (num1 == num2) {
        resultado = num1 + num2;

    } else if (num1 > num2) {

        resultado = num1 - num2;

    } else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        resultado = num1 + num2;

        if ((num1 + num2) > 10) {
           resultado = "La suma es de " + resultado + " y supero el 10";
        }

    }

    alert(resultado);

}
