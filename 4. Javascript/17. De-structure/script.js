// destructuring
// 1. Array destructuring
// 2. Object de-structuring

// Array destructure
let colors = ["Red", "Green", "Blue"];

// syntax for array destructure
let [color1, color2, color3] = colors;

// console.log("color1", color1);
// console.log("color2", color2);
// console.log("color3", color3);

// Object destructuring
// let person = {
//   name: "John",
//   age: 25,
//   city: "New York",
// };

// let { name, age, city } = person;
// console.log("name", name);
// console.log("age", age);
// console.log("city", city);

// ----------------------------------------------------------------------
// Array destructure advanced
// Basic
let fruits = ["Apple", "Orange", "Mango"];

let [fruitOne, fruitTwo, fruitThree] = fruits;

// console.log(` fruits list => ${fruitOne}, ${fruitTwo}, ${fruitThree}`);

// skipping elements
let userNames = ["John", "Jack", "Mary", "Robert"];
let [, , userThree] = userNames;

// console.log("User Three", userThree);

// Swapping Variables
let [numOne, numTwo] = [1, 2];
[numOne, numTwo] = [numTwo, numOne];
// console.log(numOne, numTwo);

// Rest Parameter
// let [subject1, subject2, ...restSubjects] = [
//   "Tamil",
//   "english",
//   "maths",
//   "physics",
//   "chemistry",
//   "environmental",
//   "social science",
// ];

// console.log("Subject1", subject1);
// console.log("Subject2", subject2);
// console.log("rest of subject", restSubjects);

//----------------------------------------------------------------------
// Object De-structure Advanced
// Basics
let person = {
  name: "John",
  age: 25,
  city: "New York",
};

// let { name, age, city } = { name: "John", age: 25, city: "Chennai" };

// console.log("Name", name);
// console.log("Age", age);
// console.log("City", city);

// Aliasing Properties

// let {
//   name: userName,
//   age: old,
//   city: location,
// } = { name: "John", age: 25, city: "Chennai" };

// console.log("userName", userName);
// console.log("old", old);
// console.log("location", location);

// Nested Destructuring
// Default values
// let {
//   name,
//   age,
//   city,
//   state = "TN",
// } = { name: "John", age: 25, city: "Chennai" };

// console.log("city", city);
// console.log("State", state);

// let { city } = { name: "John", age: 25, city: "Chennai" };
// console.log("city", city);

// rest variable
let { name, ...restProp } = {
  country: "India",
  name: "John",
  age: 35,
  city: "Chennai",
};

console.log("name", name);
console.log("restProp", restProp);
