/** Clase 2 **/

/* 
    * Consigna * 
    Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(),
    compare las entradas y, en función de ciertas condiciones, muestre por consola o alert()
    el resultado según los valores ingresados y las condiciones cumplidas.
*/

let nombre = prompt('Ingresa tu nombre');

if (nombre != null) {
    nombre = nombre.toUpperCase();

    alert(`${nombre} vamos a evaluar el mayor de dos números...`)

    let numA = parseInt(prompt('Ingresa un número entero'));

    if (numA <= 0 || isNaN(numA)) {
        alert('Debe ingresar un número positivo, mayor a cero, saliendo...');
    } else {
        let numB = parseInt(prompt('Ingresa un número entero'));

        if (numB <= 0 || isNaN(numB)) {
            alert('Debe ingresar un número positivo, mayor a cero, saliendo...');

        } else {
            if (numA === numB) {
                alert(`El número ${numA} es igual que el número ${numB}...`);

            } else {
                alert(`El número ${numA > numB ? numA : numB} es mayor que el número ${numB < numA ? numB : numA} por ${numA > numB ? numA - numB : numB - numA} números...`);
            }
        }
    }

    alert('Hasta luego, ' + nombre);
} else {
    alert('Debe ingresar un nombre, saliendo...');
}
