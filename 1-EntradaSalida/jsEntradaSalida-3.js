/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {//Inicio de la funcion

  //Declaracion de variables
  var nombre;

  //Obtencion del nombre
  nombre = document.getElementById("elNombre").value;

  //Muestra del nombre por alert
  alert("Su nombre es " + nombre + ".");

}//Fin de la funcion


