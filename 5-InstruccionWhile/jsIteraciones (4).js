function mostrar() {
  //Declaracion de variables
  var numero;

  //Entrada
  numero = parseInt(prompt("Ingrese un número entre 0 y 10."));

  //Procesamiento
  while (numero <= 0 || numero >= 9 || isNaN(numero)){
    numero = prompt("Error, vuelva a ingresar el numero");

  }
  //Salida
  document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN
