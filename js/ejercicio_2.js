/* 2. Construya una función que imprima si un número es primo o no, los números
 primos son aquellos que son divisibles solo por 1 y por sí mismos. */

function primo(n) {

    for (let i= 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return n !== 1;
}

console.log(primo(13))
