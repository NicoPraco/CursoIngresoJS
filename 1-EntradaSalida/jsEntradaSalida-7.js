/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {//Inicio de la funcion SUMAR
  //Declaracion de variables
  var num1;
  var num2;
  var suma;

  //Entrada
  num1 = document.getElementById("numeroUno").value;
  num2 = document.getElementById("numeroDos").value;

  //Procesamiento
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  suma = num1 + num2;

  //Salida
  alert("La suma es igual a " + suma);

}//Fin de la funcion SUMAR

function restar() {//Inicio de la funcion RESTAR
  //Declaracion de variables
  var num1;
  var num2;
  var resta;

  //Entrada
  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);

  //Procesamiento
  resta = num1 - num2;

  //Salida
  console.log("La resta s igual a " + resta);

}//Fin de la funcion RESTAR

function multiplicar() {//Incio de la funcion MULTIPLICAR
  //Declaracion de variables
  var num1;
  var num2;
  var multiplicacion;

  //Entrada
  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);

  //Procesamiento
  multiplicacion = num1 * num2;

  //Salida
  document.write("El resultado de la multiplicación es igual a " + multiplicacion);

}//Fin de la funcion MULTIPLICAR

function dividir() {//Incio de la funcion DIVIDIR
  //Declaracion de variables
  var num1;
  var num2;
  var division;

  //Entrada
  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);

  //Procesamiento
  division = num1 / num2;

  //Salida
  alert("La division es igual a " + division);

}//Fin de la funcion DIVIDIR

