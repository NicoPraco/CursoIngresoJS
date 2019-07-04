/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {//Inicio de la funcion

  //Declaracion de variables

  var sueldo;
  var descuento;
  var total;

  //Entrada

  sueldo = parseInt(document.getElementById("importe").value);

  //Planificacion

  descuento = sueldo * 25 / 100;
  total = sueldo - descuento;

  //Salida

  document.getElementById("resultado").value = total

}
