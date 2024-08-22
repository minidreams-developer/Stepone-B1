// switch cases
// an alternative to if..else

/*
switch(condition){        condition === case
    case (value-1):
        statement
        break;
    case (value-2):
        statement
        break;
    case (value-n):
        statement
        break;
    default:
        statement
}
*/

let a = 2;
let b = 45;
let c = a + b;

switch (c) {
  case 2:
    console.log("value is 2");
    //multiple statement
    //multiple statement
    //multiple statement
    //multiple statement
    //multiple statement
    //multiple statement
    break; // break should be at last line
  case 4:
    console.log("value is 4");
    break;
  case 6:
    console.log("value is 6");
    break;
  default:
    console.log("none of above value");
}

// if (c === 2) {
//   console.log("value is 2");
// } else if (c === 4) {
//   console.log("value is 4");
// } else if (c === 6) {
//   console.log("value is 6");
// } else {
//   console.log("none of the value above");
// }
