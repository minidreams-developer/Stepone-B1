// Loops
// used for repeat actions
// loops are ways to repeat the same code multiple times

// iteration:
// start, looping, end...start, looping, end....start,,

/*
 Three types of Loops
 1. while
 2. do...while
 3. for(..;..;...;)
*/

/*
1. Initialization - starting the loop
2. Condition      - when the loop should end
3. Increment/decrement   - pattern
*/

// WHILE LOOPS
/*
    initialization;
    while(condition){
        // code
        // pattern => increment/decrement
    }
*/
// print 1 to 10
// let i = 1;
// while (i <= 10) {
//   console.log(`iteration___${i}`);
//   console.log(`value of i___${i}`);
//   console.log("i=>", i);
//   i++;
// }

// let i = 1;
// while (i < 10) {
//   //   console.log("without condition i===>", i);
//   if (i % 2) {
//     console.log("event Numbers", i);
//     console.log(i);
//   }
//   i++;
// }

// do...while loop
// Syntax
/*
 initialization;
 do{
    code
    pattern = increment/decrement
 }while(condition)
*/
// let i = 1;
// do {
//   console.log("i==>", i);
//   i++;
// } while (i < 10);

// for(.......)
// syntax
/*
for(initialization; condition; pattern){
loop body
}
*/

// for (let i = 1; i <= 10; i++) {
//   console.log("for loop I==>", i);
// }

// let i = 1;
// for (; i < 10; i++) {
//   console.log(i);
// }

// let j = 1;
// for (; j < 10; ) {
//   console.log(i);
//   i++;
// }

// break => cut the entire loop
// continue  => skip the current loop

for (let i = 1; i <= 10; i++) {
  if (i % 3) continue;
  console.log("i", i);
}
