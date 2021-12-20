//Reto #9 “Calculando días”

//Instrucciones: escribe un programa al que le indiques una cantidad de días y como resultado deberá mostrar cuantas horas, minutos y segundos hay en dicha cantidad de días.

const cantDias = parseInt(prompt("Ingrese la cantidad de días: "));

const sumaHoras = cantDias * 24;
const sumaMinutos = sumaHoras * 60;
const sumaSegundos = sumaMinutos * 60;

alert(
  `En ${cantDias} días, hay: ${sumaHoras} horas, ${sumaMinutos} minutos y ${sumaSegundos} segundos`
);