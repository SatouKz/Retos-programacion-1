//Reto #7 “Edad futura y pasada”

//Instrucciones: pide al usuario que indique su nombre y su edad. 
//Como mensaje de salida le indicarás que edad tuvo el año pasado y cuantos años tendrá el siguiente año.
//Ejemplo: [nombre] el año pasado tenías X años y el próximo año cumplirás Y años.

const nombre = prompt("Por favor ingrese su nombre");
const edad = prompt("Por favor ingrese su edad");

alert(
  `Hola ${nombre} el año pasado tenías ${
    parseInt(edad) - 1
  } años y el año próximo tendrás ${parseInt(edad) + 1}`
);