'use strict';

function verAsignaturas(...alumnos) 
{
    if (alumnos.length === 0) 
    {
        console.log("No hay datos para mostrar");
        return;
    }

    alumnos.forEach(([nombre, curso, ...asignaturas]) => 
    {
        console.log(`${nombre} - ${curso} - Asignaturas: ${asignaturas.join('/')}`);
    });
}
