function mostrar() {
  //Declaracion de variables
  var letra;
  var num;
  var cantidadNumerosPares = 0;
  var cantidadNumerosInpares = 0;
  var cantidadCeros = 0;
  var acumuladorPositivos = 0;
  var promedioNumerosPositivos;
  var acumuladorNegativos = 0;
  var numeroMaximo;
  var letraMaxima;
  var numeroMinimo;
  var letraminima;
  var flag = true;

  //Entrada
  //Procesamiento;
  do {
    letra = prompt("Ingrese una letra.");

    while (isNaN(letra) == false) {
      letra = prompt("Error, ingrese una letra valida.");

    }

    num = prompt("Ingrese un número.");

    while (isNaN(num) == true || num < -100 || num > 100) {
      num = prompt("Error, ingrese un número valido");

    }
    num = parseInt(num);

  } while (confirm("¿Desea repetir el proceso?"));

  if (num % 2 == 0) {
    cantidadNumerosPares++;

  } else {
    cantidadNumerosInpares++;

  }
  if (num == 0) {
    cantidadCeros++;

  }
  if (num > 0) {
    acumuladorPositivos = acumuladorPositivos + num;

  } else {
    acumuladorNegativos = + num;

  }

  if (flag == true) {
    numeroMaximo = num;
    letraMaxima = letra;
    numeroMinimo = num;
    letraminima = letra;

    flag = false;
  } else if(num > numeroMaximo){

  }


}
