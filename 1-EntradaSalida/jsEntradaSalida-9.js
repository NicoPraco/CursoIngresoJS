/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {//Incio de la funcion

  //Declaracion de variables

  var sueldo;
  var importe;
  var total;

  //Entrada

  sueldo = parseInt(document.getElementById("sueldo").value);

  //Procesamiento

  importe = sueldo * 10 / 100,
  total = sueldo + importe;

  //Salida
  document.getElementById("resultado").value = total;

}//Fin de la funcion
