/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {//Inicio de la funcion

  //Declaracion de variables
  var num1;
  var num2;
  var suma;

  //Entrada
  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);

  //Procesamiento
  suma = num1 + num2;

  //Salida
  alert("La suma es igual a " + suma + ".");

}//Fin de la funcion

