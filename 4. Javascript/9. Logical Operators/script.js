// Logical Operators
// 1. OR     => ||
// 2. AND    => &&
// 3. NOT    => !
// 4. Nullish coaleshing   => ??

// a + b  a,b => operands, + => operators (Binary operator)
// OR ||
// it accepts two operands
// a || b   => a

if (true || false) {
  //if block
}
// (12 > 5) || (3 < 5)  =>
/*
true || true   => true
true || false  => true
false || true  => true
false || false  => false
*/
// it will output true or false (or) anytype value

// if (a > b || b > a || a === b) {
//   // a>b (false) || b>a (true)   => false || true  => true
//   // true || a === b  => true || false   => true
//   console.log("execute");
// }

// null, "", 0, false, undefined,
if (1 + 2 || 0 + 0) {
  console.log("will it execute?");
}
// first truthy value
console.log("OR=>", 0 || 1 || null);

// what happen, if all values are true? (out put the first truthy value)
console.log("OR TRUE=>", 1 || 2 || 3 || 4);

// for all false values (output the last value)
console.log("OR FALSE=>", 0 || 2 - 2 || 3 - 3 || null);

//=====================================================================================
//AND operator &&
// all needs to be true
/*
 true && true    => true
 true && false   => false
 false && true   => false
 false && false  => false
*/

// AND operator checks the first falsy value
let a = 10;
let b = 12;

if (a < b && b > a) {
  // true && true   ==> true
  console.log("execute");
}

// it finds first falsy value
console.log("AND=>", 0 && 1 && null);

// for all false values (output the last value)
console.log("AND FALSE=>", 0 && 2 - 2 && 3 - 3 && null);

// what happen, if all values are true? (out put the first truthy value)
console.log("AND TRUE=>", 1 && 2 && 3 && 4);

//========================================================================
// NOT OPERATOR !
console.log("inverse of true===>", !true);

if (!(a > b)) {
  // !(false)   => true
  console.log("Inverse worked");
}

//======================================================================
// NUllish coalcashing operator
// ??
// used to check, whether the variables are defined or not
// a ?? b   => if a is defined outputs a. if not, then outputs b

let c = null;
console.log("nullish coalcashing", c ?? null ?? b);

console.log("false ?? true ===>", false ?? true);
