function mostrar() {
  //Declaracion de variables
  var sexo;

  //Entrada
  sexo = prompt("ingrese f ó m.");

  //Procesamiento
  while(sexo != "f" && sexo != "m"){
    sexo = prompt("Error, vuelva a ingresar el sexo");
  }

  //Salida
  document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN
