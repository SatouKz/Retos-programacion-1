//Reto #10 “Conversor de millas”

//Instrucciones: hay 1.609344 km en una milla (mi). Escribe un programa en el que el usuario indique una cantidad de millas y muestre en pantalla el resultado convertido a kilómetros.

const cantMillas = prompt("Ingrese la cantidad de millas");

alert(
  `En las ${cantMillas} millas hay: ${parseFloat(cantMillas) * 1.609344} km`
);