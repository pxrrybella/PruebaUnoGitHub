/*
EJERCICIO
Vamos a pedir al usuario que ingrese la cantidad alumnos a los cuales les asignará una nota, luego de que ingrese la catidad de notas de cada alumnos, se va a desplegar un menú.
las opciones del menú serán la siguentes:
1.- mostrar el promedio de notas
2.- mostrar si la nota es aprobatoria o reprobatoria
3.- mostrar si la nota está por sobre o por debajo del promedio del curso
*/

let cantAlumnos;
const notasAlumnos = [];

do {
    cantAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos: "))
    //console.log("*" + cantAlumnos + "*" + typeof(cantAlumnos));
    if ((Number.isNaN(cantAlumnos)) || cantAlumnos <= 0) {
        console.log("Ingreso inválido, por favor, intente otra vez.")
    } else {}
    } while ((Number.isNaN(cantAlumnos)) || cantAlumnos <= 0);

console.log("\n")

for (let i = 1; i <= cantAlumnos; i++){
    let notaAlumno = 0;
    
    do {
        notaAlumno = parseFloat(prompt("Ingrese la nota del alumno " + i + " :"))
    } while ((Number.isNaN(notaAlumno)) || notaAlumno > 7 || notaAlumno < 1)

    notasAlumnos.push(notaAlumno);
}

console.log("\n");

function promedio(arrayNotas){
    let suma = 0;

    for (let i = 0; i < arrayNotas.length; i++){
        suma = suma + arrayNotas[i];
    }

    let promedioFinal = (suma / arrayNotas.length);

    return promedioFinal
}

function aprobado(arrayNotas){
    let notaMin = parseFloat(prompt("Ingrese la nota mínima para aprobar (con un decimal si es necesario): "));

    for (i = 0; i < arrayNotas.length; i++){
        if (arrayNotas[i] >= notaMin){
            console.log(arrayNotas[i] + " es una nota azul.")
        } else {
            console.log(arrayNotas[i] + " es una nota roja.")
        }
    }
}

function sobrePromedio(arrayNotas, promedio){
    for (i = 0; i < arrayNotas.length; i++){
        if (arrayNotas[i] > promedio){
            console.log(arrayNotas[i] + " está sobre el promedio (" + promedio + ").")
        } else if (arrayNotas[i] == promedio){
            console.log(arrayNotas[i] + " coincide con el promedio (" + promedio + ").")
        } else {
            console.log(arrayNotas[i] + " está bajo el promedio (" + promedio + ").")
        }
    }
}

let opcionUsuario = 1;

while (opcionUsuario <= 3 || opcionUsuario > 0){
    do {
        console.log("\n A continuación, las opciones: \n 1. Ingrese 1 si quiere conocer el promedio. \n 2. Ingrese 2 si quiere saber qué notas son aprobatorias \n 3. Ingrese 3 si quiere saber qué notas están sobre el promedio. \n 4. Presione enter si quiere terminar el programa. ")
    opcionUsuario = parseInt(prompt("Ingrese un número: "))
    } while (opcionUsuario < 0 || opcionUsuario > 3);
    
        if (opcionUsuario == 1){
            console.log("**** El promedio fue " + promedio(notasAlumnos));
        } else if (opcionUsuario == 2){
            aprobado(notasAlumnos);
        } else if (opcionUsuario == 3 ){
            sobrePromedio(notasAlumnos, promedio(notasAlumnos));
        } else {
            console.log("Gracias!")
        }
    }