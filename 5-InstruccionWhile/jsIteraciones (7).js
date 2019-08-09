function mostrar() {
	//Declaracion de variables
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var suma;

	//Entrada
	acumulador = parseInt(prompt("Ingrese un numero"));

	contador++;

	respuesta = prompt("¿Desea repetir el proceso?");

	//Planificacion
	while(respuesta == "si") {
		suma = parseInt(prompt("Ingrese un numero"))
		acumulador = acumulador + suma;
		contador++;
		respuesta = prompt("¿Desea repetir el proceso?");

	}

	//Salida
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN
