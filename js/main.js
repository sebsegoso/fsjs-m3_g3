// 1.- Costruya una función que dado un numero n entero y menor que 100 calcule la sumatoria de 1
// hasta n.

function sumToN(n) {
    let c = 0;
    let sum = 0;

    while (c <= n) {
        sum += c;
        c++;
    }
    return sum;
}




function printSumToN() {
    const n = document.getElementById("ej-1-input-1").value;
    const resultSpan = document.getElementById("ej-1-result");


    if (Number.isInteger(Number(n)) && n < 100) {
        resultSpan.innerHTML = sumToN(Number(n));
    } else {
        alert("Ingrese un numero natural menor a 100");
    }
}