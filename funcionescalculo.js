const readlineSync = require('readline-sync');
let total = 0;
let numeros = [total];
let suma = 0;

let calcularPromedio = (numeros) => {

    

    for (let i = 0; i < total; i++) {
        suma = suma + numeros[i];


} 



return;
}

let cargarNumeros = () => {
    let total = readlineSync.question ("Ingresa la cantidad de numeros para promediar: ");

   


    for(let i=0; i<total; i++) {
    
        
    let aux = readlineSync.question ("Ingrese el valor de los numeros a promediar: ");
    aux = Number(aux);
    numeros[i]=aux;
    }
    return;
    }
    
    module.exports = {calcularPromedio, cargarNumeros, numeros, suma, total};
