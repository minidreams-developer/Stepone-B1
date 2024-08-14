// conversion methods
/* 
    1. String conversion ( convert it as string )
    2. Number conversion ( convert it as a Number)
    3. Boolean conversion ( convert it as true or false)
*/

//String conversion
// String
let isAdmin = true; //boolean
let num = 456252;
console.log("before conversion--->", typeof isAdmin);
console.log("before isAdmin--->", isAdmin);
isAdmin = String(isAdmin);
console.log("After conversion--->", typeof isAdmin);
console.log("after isAdmin--->", isAdmin);

console.log("============================================");
console.log("before conversion", num);
console.log("before conversion", typeof num);
num = String(num);
console.log("after conversion", num);
console.log("after conversion", typeof num);
