const readlineSync = require('readline-sync');

const {cargarNumeros, calcularPromedio, numeros, suma, total} = require('./funcionescalculo');

cargarNumeros();

calcularPromedio(numeros);

console.log("la suma es " + suma);
console.log("El promedio es: " + (suma/total));
