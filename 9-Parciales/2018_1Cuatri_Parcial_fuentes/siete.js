function mostrar() {
  //Declaracion de variables
  var nota;
  var acumulador = 0;
  var sexo;
  var contador = 0;
  var promedio;
  var min;
  var sexoNota
  var cantidadNota = 0;

  //Entrada
  //Procesamiento
  while (contador < 5) {

    nota = prompt("Ingrese una nota");
    while (isNaN(nota) || nota < 0 || nota > 10) {
      nota = prompt("Error, ingrese una nota valida");

    }
    nota = parseInt(nota);

    sexo = prompt("Ingrese el sexo");
    while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {
      sexo = prompt("Error ingrese un sexo valido");

    }

    acumulador = acumulador + nota;

    if (contador == 0) {
      min = nota;
      sexoNota = sexo;

    } else {
      if (min > nota) {
        min = nota;
        sexoNota = sexo;

      }
    }

    if (sexo == "m" && nota >= 6) {
      cantidadNota++;

    }
    contador++

  }
  promedio = acumulador / 5;

  alert("El promedio de las notas es de " + promedio);
  alert("La nota mas baja es de " + min + " y el sexo es " + sexoNota);
  alert("La cantidad de varones con nota mayor o igual a 6 es de " + cantidadNota);

}
