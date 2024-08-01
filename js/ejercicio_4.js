/* Construya una función que dado un numero n entero mayor que 10 y menor que 1000
 calcule la sumatoria de todos los números pares contenidos en el rango. */

function evenSum(n) {
    let sum = 0;

    for (i = n; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        }

    }

    return sum;
}

function printEvenSum() {
    const n = document.getElementById("ej-4-input-1").value;
    const resultSpan = document.getElementById("ej-4-result");

    if (Number.isInteger(Number(n)) && n > 10 && n < 1000) {
        resultSpan.innerHTML = evenSum(n);
    } else {
        alert("Introduzca un numero entero mayor que 10 y menor que 1000")
    }
}
