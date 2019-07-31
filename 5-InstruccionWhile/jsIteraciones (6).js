function mostrar() {
  //Declaracion de variables
  var contador = 0;
  var acumulador = 0;
  var suma;

  //Entrada
  acumulador = parseInt(prompt("Ingrese un numero"));


  //Procesamiento
  while (contador < 4) {
    suma = parseInt(prompt("Ingrese un numero"));
    acumulador = acumulador + suma;
    contador++

  }

  //Salida
  document.getElementById('suma').value = acumulador;
  document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN
