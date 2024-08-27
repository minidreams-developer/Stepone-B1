// Functions are building blocks of program.
// What are functions  => a block of code
// input  => process  => output
/*
 calculator{
    block


 }
*/

// Syntax
// 1. Function declaration
// 2. Function calling

// function declaration
/*
    function functionName (parameter-1,......parameter-n){
    
    function body
    }

*/

// function calling
// functionName(argument-1,....argument-N)

// example:
// function addFunction() {
//   let numOne = 12;
//   let numTwo = 20;
//   let sum = numOne + numTwo;
//   console.log("sum", sum);
// }

// addFunction();

//================================================================================================
// local variable let, var, const

// let a = 10;

// function addFunction() {
//   a = 50;
//   let numOne = 12;
//   let numTwo = 20;
//   let sum = numOne + numTwo + a;
//   console.log("sum", sum);
// }
// addFunction();
// console.log("a", a);
// console.log("numOne=>", numOne);

// function add(numOne, numTwo) {
//   let sum = numOne + numTwo;
//   console.log("sum==>", sum);
// }

// add(10, 20000);
//================================================================
// let name = prompt("What's your name?", "john");
// let age = Number(prompt("what's your age?", 18));

// function isEligible(name, age) {
//   if (age > 18) {
//     console.log(`Hi ${name}, You are Eligible`);
//   } else {
//     console.log(`Hi ${name}, You are not Eligible`);
//   }
// }

// isEligible(name, age);

// return

// function addFunction() {
//   let numOne = 12;
//   let numTwo = 20;
//   let sum = numOne + numTwo;
//   console.log("sum=?", sum);
//   return sum;
// }
// addFunction();

// console.log(addFunction());
//=======================================================================================================
// function expression

// normal function syntax
/*
    function funtionName(){
    
        function body
    }

*/

// function expression syntax
/*
    let varName = function(parameter-1...parameter-N){
        function body
    }

    varName(arg-1,...arg-2)
*/

// let addFunction = function (numOne, numTwo) {
//   let sum = numOne + numTwo;
//   console.log("sum=>", sum);
//   return sum;
// };

// addFunction(1000, 3000);

//===============================================================================
// 3. arrow functions
// syntax
/*
    let varName = (parameter-1,...parameter-N) => {
            function body
            return
        
        }
*/

// let addFunction = (numOne, numTwo) => {
//   let sum = numOne + numTwo;
//   console.log("sum=>", sum);
//   return sum;
// };

// addFunction(87, 33);

// we can omit the block, if the body is single functionality or single line
// let addFunction = (numOne, numTwo) => numOne + numTwo;

// console.log(addFunction(10, 60));

// // we can omit paramter paranthesis if it only has single parameter

// let square = num => num * num;

// console.log(square(6));
