/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {//Inico de la funcion

  //Declaracion de variables

  var num1;
  var num2;
  var resto;

  //Entrada

  num1 = parseInt(document.getElementById("numeroDividendo").value);
  num2 = parseInt(document.getElementById("numeroDivisor").value);

  //Procesamiento

  resto = num1 % num2;

  //Salida
  console.log("El resto es " + resto)

}
