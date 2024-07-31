/* Construya una función que dado un numero n entero mayor que 10 y menor que 1000
 calcule la sumatoria de todos los números pares contenidos en el rango. */

function sumatoria(n) {

    if (n < 10 || n > 1000) {
        console.log("Introduzca un valor mayor que 10 y menor que 1000")
    }

    let suma = 0;

    for (i = n; i <= 1000; i++) {
        if (i % 2 === 0){
            suma += i;
        }

    }

    console.log(suma);
}
