//Reto #5 “Suma y multiplicación”

//Instrucciones: añadiendo un extra al reto anterior ahora el usuario ingresará 3 números, sumarás los 2 primeros y el resultado será multiplicado por el tercero. 
//Añade las consideraciones del punto decimal del reto anterior.

const num1 = prompt("Ingrese un número");
const num2 = prompt("Ingrese un número");
const num3 = prompt("Ingrese un número");

const resultado = (parseFloat(num1) + parseFloat(num2)) * num3;

alert(
  `El resultado de la suma de ${num1} y ${num2}, multiplicado por ${num3} es: ${resultado.toFixed(
    2
  )}`
);