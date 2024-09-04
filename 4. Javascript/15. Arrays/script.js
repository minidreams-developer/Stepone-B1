// Non - Primitive Data types
// Object, Arrays, Function

// Object => collection of data in key:value pair
/*
    let user = {
    name: "john",
    age: 40,
    address: "chennai"
    key: value
    }

    user.address = "chennai"
*/

// Array => collection of data in sequential order
// []
// Declaration
// 1. new Array()
// 2. [] => commonly used

// syntax
// let varname = [comma, sperated, values]

// example
let fruits = ["Apple", "Orange", "Mango"];
// positions    [0]       [1]       [2]  (index)
// length       1         2         3
// console.log("Fruits Array =>", fruits);

// // Accessing  array elements by index
// // syntax
// // arrayName[index]
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log("length of fruits", fruits.length);

// // example with loop

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// updating array
// in object we used dot (. notation)

// 1. Add
// arrayName[nIndex] = value
// fruits[3] = "pineapple"ew

let subjects = ["English", "Maths", "Physics", "Chemistry"];

// console.log("subjects", subjects);
// console.log("---------------------------------------------------");

subjects[4] = "Computer";

// console.log("After adding subject", subjects);
// console.log("---------------------------------------------------");

// 2. Update
// arrayName[existingIndex] = newValue
subjects[1] = "Environmental Science";

// console.log("After updating Position", subjects);
// console.log("---------------------------------------------------");

// 3. delete
// syntax
// delete arrayName[index]
delete subjects[4];
// console.log("After deleting 4th index", subjects[4]);
// console.log("length", subjects.length);

// mixArrays

let mixArrays = [
  "john", // 0
  25, // 1
  true, // 2
  {
    // 3
    name: "jack",
    city: "chennai",
  },
  ["cricket", "football"], // 4
];

console.log("mixArrays=>", mixArrays);
// console.log(mixArrays[4][1]);

//=========================================================================
// Array methods
// pop()/ push()
// shift()/ unshift()

// syntax
// arrayName.pop() / arrayName.push()
// pop() => remove last element in the array
// push() => Add an new element at last in the array

let books = ["tamil", "English", "Maths", "physics"];

// pop() => remove last element from an array
// console.log("books array", books);
// console.log(books.pop());
// console.log("after removing", books);

// // push() => add a last element from an array
// books.push("Biology", "chemistry");
// // console.log("After adding values", books);
// console.log("0 index", books[0]);

// // shift() => Remove first element in an array
// books.shift();
// console.log("After removing first element", books);
// console.log("0 index after shift", books[0]);

// //unshift() => Adding first element in an array
// books.unshift("Social science");
// console.log("after unshift", books);
// console.log("0 index after unshift", books[0]);
