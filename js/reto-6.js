//Reto #6 “Resta de pizzas”

//Instrucciones: llegaste a una fiesta con X cantidad de rebanadas de pizza (indicadas por el usuario), después de un rato se consumió "Y" cantidad de rebanadas y quedan Z. 
//Fácil ¿cierto?
//El reto está en que expreses lo que sucede es una forma comprensible para cualquier persona, imprescindible pensar en tus usuarios 😉

const porcionesTotal = prompt("Ingrese la cantidad total de porciones");
const porcionesConsumidas = prompt(
  "Ingrese la cantidad de porciones consumidas"
);

const resultado = parseInt(porcionesTotal) - parseInt(porcionesConsumidas);

alert(
  `Ingresaron ${porcionesTotal} porciones de pizzas, se consumieron ${porcionesConsumidas} porciones y quedaron ${resultado} porciones.`
);