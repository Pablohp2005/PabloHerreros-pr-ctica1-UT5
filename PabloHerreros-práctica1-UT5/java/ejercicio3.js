'use strict';

nombres1 = ["Josefa", "María", "Lucia", "Juan"];
nombres2 = ["Rufo", "Marcos", "Luis", "Josefa", "Maite", "Sebas", "María"];

let todos = true;
let algunos = false;

nombres1.forEach(nombre => 
    {
    if (!nombres2.includes(nombre)) 
    {
        todos = false;
    } 
    else 
    {
        algunos = true;
    }
});

if (todos) 
{
    console.log("Todos los nombres del primer array están presentes en el segundo.");
} 
else if (algunos) 
{
    console.log("Al menos un nombre del primer array está presente en el segundo.");
}
else
{
    console.log("No hay ninguno incluido.")
}
