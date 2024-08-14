// To store a value in a variable
// Datatype differs for each languages
// Data Types
// Two categories
// 1. Primitive Data types
//        i) Number, ii) BigInt, iii) String, iv) Boolean v) null, vi) undefined, vii) symbol

// 2. Non-primitive Data types
//        i) Object, ii) Array, iii) functions

// Primitive Data Types
// i) Number
//    whole Number, decimal Number, infinity, -inifinity, NaN

//----------------------------------Number-----------------------------------------------
// let num = prompt("what's the price", 10);
// let cash = 13.9;
// let unlimited = Infinity;
// let negativeUnlimited = -Infinity;

// console.log("num", num);
// console.log("num data type===>", typeof num);
// console.log("=================================");

// console.log("Decimal", cash);
// console.log("Decimal cash data type===>", typeof cash);
// console.log("=================================");

// console.log("infinity", unlimited);
// console.log("infinity data type===>", typeof unlimited);
// console.log("=================================");

// console.log("Negative Infinity", negativeUnlimited);
// console.log("Negative Infinity data type===>", typeof negativeUnlimited);
// console.log("=================================");

//--------------------------------String--------------------------------------------------------------
// syntax
// Represented in three ways;
// 1) single quote ''     2) double quote  ""  3) Backticks ``

// double quotes
// let name = "Richard";
// console.log("name", name);
// console.log("type", typeof name);

// name = `feyman`;
// console.log("name in backticks", name);

// let namePrice = `the value is ${num}`;
// console.log("price?", namePrice);

//-----------------------------------Boolean---------------------------------------------------------
// syntax
// true or false : used for conditional rendering

let isAdmin = false;
console.log("boolean", isAdmin);
console.log("isAdmin Data types", typeof isAdmin);

//------------------------------BigInt-------------------------------------------------------------
// Big integer
// syntax append n at last. eg: 74108529865385274185286523852741852585296396754n;
let bigint = 85296338527418529685741852852963852741852965n;
console.log("bigint===>", bigint);
console.log("type of bigint===>", typeof bigint);

//---------------------------------null---------------------------------------------------------
// intentional absense of value;
// let variable = null;

let noValue = null;
console.log("no value===>", noValue);
console.log("type of no value===>", typeof noValue);

//---------------------------undefined--------------------------------------------------------
// datatypes unclear or not yet defined;

let age;

console.log("Age=====>", age);
console.log("type of Age=====>", typeof age);

age = 25;

console.log("Age after defined=====>", age);
console.log("type of Age after defined=====>", typeof age);
