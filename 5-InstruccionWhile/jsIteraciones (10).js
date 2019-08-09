function mostrar() {
  //Declaracion de variables
  var contadorPositivos = 0;
  var contadorNegativos = 0;
  var acumulador = 0
  var sumaNegativos = 0;
  var sumaPositivos = 0;
  var cantidadPositivos = 0;
  var cantidadNegativos = 0;
  var cantidadDeCeros = 0;
  var cantidadDePares = 0;
  var promedioPositivos;
  var promedioNegativos;
  var diferenciaPosNeg;

  //Entrada
  //Procesamiento

  do {
    acumulador = parseInt(prompt("Ingrese un número"));

    while (isNaN(acumulador) == true) // NO hace falta poner el igual a "true" en el isNaN!
    {
      acumulador = parseInt(prompt("Error, ingrese un número"));
    }

    if (acumulador < 0) {
      sumaNegativos += acumulador;
      cantidadNegativos++;
      contadorNegativos++;

    } else if (acumulador > 0) {
      sumaPositivos += acumulador;
      cantidadPositivos++;
      contadorPositivos++

    } else if (acumulador == 0) {
      cantidadDeCeros++;

    } if (acumulador % 2 == 0) {
      cantidadDePares++;

    }

  } while (confirm("¿Desea repetir el proceso?"))

  promedioNegativos = sumaNegativos / contadorNegativos;
  promedioPositivos = sumaPositivos / contadorPositivos;

  diferenciaPosNeg = sumaPositivos + sumaNegativos;

  document.write("La suma de numeros negativos es de " + sumaNegativos + "<br>");
  document.write("Hay " + cantidadNegativos + " numeros negativos <br>");
  document.write("El promedio de numeros negativos es de " + promedioNegativos + "<br>");
  document.write("La suma de numeros positivos es de " + sumaPositivos + "<br>");
  document.write("Hay " + cantidadPositivos + " numeros positivos <br>");
  document.write("El promedio de numeros positivos es de " + promedioPositivos + "<br>");
  document.write("La cantidad de ceros ingresados es de " + cantidadDeCeros + "<br>");
  document.write("La cantidad de numeros pares es de " + cantidadDePares + "<br>");
  document.write("La diferencia entre numeros positivos y negativos es igual a " + diferenciaPosNeg);

}//FIN DE LA FUNCIÓN
