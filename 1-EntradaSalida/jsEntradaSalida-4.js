/*
	Debemos lograr tomar un dato por 'PROMPT'
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar() {//Inicio de la funcion

  //Declaracion de variables
  var nombre;

  //Entrada
  nombre = prompt("Ingrese su nombre.");

  //Salida
  document.getElementById("elNombre").value = nombre;

}//Fin de la funcion

