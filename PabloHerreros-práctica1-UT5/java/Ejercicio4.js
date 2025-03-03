'use strict';

let alumnos = [
    { nombre: "Juan", curso: "PrimerCurso" },
    { nombre: "María", curso: "SegundoCurso" },
    { nombre: "Pedro", curso: "TercerCurso" }
];

let alumnosyAsignaturas = [];

alumnos.forEach(alumno => {
   
    const asignaturas = prompt(`Ingrese las asignaturas en las que estás matriculado ${alumno.nombre} (separadas por -):`);
    
    const asignaturasArray = asignaturas.split('-').map(asignatura => asignatura.trim());
    
    const alumnoyAsignaturas = { ...alumno, asignaturas: asignaturasArray };
    
    alumnosConAsignaturas.push(alumnoyAsignaturas);
});

console.log(alumnosyAsignaturas);