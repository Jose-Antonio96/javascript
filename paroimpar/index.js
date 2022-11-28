//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
//Mostrar por pantalla el resultado devuelto por la función.

let num = prompt("Introduce un número");

function paroimpar(num){
  if(num % 2 == 0){
    return "par";
  }
  else{
    return "impar";
  }
}

let resultado = paroimpar(num);
alert("El número " + num + " es " + resultado)