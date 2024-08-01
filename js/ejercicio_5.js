/* Cree una función que permite dado un numero n imprima la tabla de multiplicar de dicho
   numero hasta el 12
 */

function calcularTablas(num) {
  console.log(`-- vamos con la tabla del ${num} --`);
  const tablas = {};
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
    tablas[i] = num;
  }
  console.log("--  --");
}

console.log(calcularTablas(1));
/* 
-- vamos con la tabla del 1 --
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10
1 x 11 = 11
1 x 12 = 12
--  -- 
*/
console.log(calcularTablas(9));
/* 
-- vamos con la tabla del 9 --
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90
9 x 11 = 99
9 x 12 = 108
--  --
*/
