/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {//Inicio de la funcion

//Declaracion de variables
  var nombre;
  var edad;

  //Entrada
  nombre = document.getElementById("elNombre").value;
  edad = document.getElementById("laEdad").value;

  //Salida
  document.write("Su nombre es " + nombre + " y tiene " + edad + " años.");

}//Fin de la funcion

