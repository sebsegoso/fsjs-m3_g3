/* 3. Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiv,
   es decir si n es 5 deberá imprimir 5,4,3,2,1 */

function countDown(n) {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr;
}

function printCountDown() {
    const n = document.getElementById("ej-3-input-1").value;
    const resultSpan = document.getElementById("ej-3-result");

    if (Number.isInteger(Number(n)) && n < 100) {
        resultSpan.innerHTML = countDown(n)
    } else {
        alert("Introduzca un numero entero menor que 100")
    }
}
