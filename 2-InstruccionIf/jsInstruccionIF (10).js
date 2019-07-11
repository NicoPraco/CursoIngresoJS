//Genero el número RANDOM entre 1 y 10 
function mostrar() {
	//Declaracion 
	var random;

	//Procesamiento y Salida
	random = Math.floor(Math.random()*(11 - 1)) + 1;

	alert(random)

	if (random == 9 || random == 10) {
		alert("Excelente");

	} else if (random >= 4) {
		alert("Aprobó");

	} else {
		alert("Vamos, la proxima se puede");

	}


}//FIN DE LA FUNCIÓN