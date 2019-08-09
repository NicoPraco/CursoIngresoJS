/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    //Declaracion de variables
    var precio1;
    var precio2;
    var precio3;
    var total;

    //Entrada
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    //Procesamiento
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    total = precio1 + precio2 + precio3;

    //Salida
    alert("La suma de los precios es igual a " + total + ".");

}
function Promedio() {
    //Declaracion de variables
    var precio1;
    var precio2;
    var precio3;
    var total;

    //Entrada
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    //Procesamiento
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    total = (precio1 + precio2 + precio3) / 3;

    //Salida
    alert("El promedio de los precios es igual a " + total + ".");

}
function PrecioFinal() {
    //Declaracion de variables
    var precio1;
    var precio2;
    var precio3;
    var subtotal;
    var total;

    //Entrada
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    //Procesamiento
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    subtotal = precio1 + precio2 + precio3;

    total = subtotal + subtotal * 21 / 100;

    //Salida
    alert("El precio final mas IVA 21% es de " + total + ".");

}