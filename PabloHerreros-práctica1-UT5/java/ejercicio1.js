'use strict';

let cadena = prompt("Introduce una cadena: ");
let booleano = prompt("Introduce un booleano: ");
let funcion = prompt("Introduce una función: ");
let array = prompt("Introduce un array numérico: ");


let arrayNumerico = array.split(',').map(Number);

if (typeof cadena != 'string' || !['true', 'false'].includes(booleano) || typeof funcion != 'string' || !Array.isArray(arrayNumerico)) 
{
    console.error("Error: Los tipos de los parámetros no son los esperados.");
} 
else 
{
    booleano = booleano === 'true';
 
    funcion = eval(funcion);

    if (booleano === true) 
    {
        let producto = 1;
        arrayNumerico.forEach(num => producto *= num);

        if (producto > 100) 
        {
            if (cadena.includes('a')) 
            {
                console.log("La 'a' no está permitida.");
            } 
            else 
            {
                console.log("Muy bien no has usado la 'a'.");
            }
        } 
        else 
        {
            console.log("El resultado de tu array es insuficiente para comprobar la cadena.");
        }
    } 
    else 
    {
        funcion();
    
    }
    
}




