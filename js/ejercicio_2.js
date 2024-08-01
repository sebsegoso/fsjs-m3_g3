/* 2. Construya una función que imprima si un número es primo o no, los números
 primos son aquellos que son divisibles solo por 1 y por sí mismos. */

function isPrime(n) {

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return n !== 1;
}

function printPrime() {
    const n = document.getElementById("ej-2-input-1").value;
    const resultSpan = document.getElementById("ej-2-result");

    if (isPrime(n)) {
        resultSpan.innerHTML = "Es primo";
    } else {
        resultSpan.innerHTML = "No es primo";

    }
}
