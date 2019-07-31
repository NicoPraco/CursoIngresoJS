function mostrar() {
	//Declaracion de variables
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var max = 0;
	var min = 0;

	//Entrada
	//Procesamiento
	while (respuesta != 'no') {
		acumulador = parseInt(prompt("Ingrese un numero"));

		if (acumulador > max) {
			max = acumulador;

		} else {
			min = acumulador;

		}

		respuesta = prompt("Desea repetir el proceso");

	}

	//Salida
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;

}//FIN DE LA FUNCIÓN