//Reto #11 “Cuantas veces un número en otro”

//Instrucciones: pide al usuario ingresar un número mayor a 1000 y otro menor a 100. Indica de una forma sencilla de entender al usuario cuantas veces cabe el número menor a 100 en el número mayor a 1000

const num1 = Number(prompt("Ingrese un número mayor a 1000"));
const num2 = Number(prompt("Ingrese un número mayor a 100"));

const res = (num1 / num2).toFixed(2);

alert(`En el num ${num1} caben ${res} números similares a ${num2}`);