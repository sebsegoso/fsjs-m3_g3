/* 3. Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiv,
   es decir si n es 5 deberá imprimir 5,4,3,2,1 */

function regresiva(n) {
    
    if (n > 100) {
        console.log("Introduzca un valor menor que 100")
    }
    for (let i = n; i > 0; i--) {
        console.log(i)
    }


}
