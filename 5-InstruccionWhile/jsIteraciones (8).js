function mostrar() {
	//Declaracion de variables
	var acumulador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 'si';

	//Entrada
	//Procesamiento
	while (respuesta == "si"){
		acumulador = parseInt(prompt("Ingrese un numero"));
		
		if (acumulador > 0){
			positivo = positivo + acumulador;



		}else {
			negativo = negativo * acumulador;
		}

		respuesta = prompt("¿Desea repetir el proceso?")

	}

	//Salida
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN