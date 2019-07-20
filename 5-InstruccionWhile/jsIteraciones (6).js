function mostrar() {
  //Declaracion de variables
  var contador = 0;
  var acumulador = 0;

  //Entrada
  acumulador = parseInt("Ingrese un numero");

  //Procesamiento
  while (contador < 5) {
    acumulador = parseInt(prompt("Ingrese un numero"));
    contador++

  }

  //Salida
  document.getElementById('suma').value = acumulador;
  document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN
