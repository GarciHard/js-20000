/** Clase 1 **/

/* 
    * Consigna * 
    Crea un script en JS que le solicite al usuario ingresar uno o más datos.
    Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las entradas teniendo en cuenta el tipo de dato.
    Al finalizar mostrar el resultados con alert() o console.log()
*/

nombre = prompt('Ingresa tu nombre');

if (!nombre) {

    alert('No ingresó el dato requerido, saliendo...');

} else {

    // Transformamos a mayúsculas.
    nombre = nombre.toUpperCase();

    // Salida personalizada con CSS, genera un texto grande con letra gruesa.
    console.log("%c Hola %s, esta es la primer clase de JS", 'font-size: 36px; font-weight: bold', nombre);

    // Concatenamos el nombre con un texto para desplegar en un alert.
    alert(nombre + ' ¡Vamos a sumar números enteros!');

    // Parseamos la entrada de números enteros.
    numA = parseInt(prompt("Ingresa el primer número"));
    numB = parseInt(prompt("Ingresa el segundo número"));

    console.log("%s la suma de los números enteros %i + %i es: %i", nombre, numA, numB, numA+numB);

    alert('Hasta luego ' + nombre + '...');
}
