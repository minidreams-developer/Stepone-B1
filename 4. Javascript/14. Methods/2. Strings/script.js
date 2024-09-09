// Strings
// 1. Double quote
// 2. single quote
// 3. Backticks

let name = "john"; // string are immutable
// positions
// 0, 1, 2, 3
// john  => j(0) o(1) h(2) n(3)

// length => total character
// john => 4

// 1. Accessing Characters
// 1. using positions
// 2. chatAt()

// using positions
// syntax
// string[position]

let city = "chennai";
// console.log("0 position of chennai", city[0]);
// console.log("1 position of chennai", city[1]);
// console.log("2 position of chennai", city[2]);
// console.log("3 position of chennai", city[3]);

// 2. Accessing length
// string.length

// console.log("length of chennai", city.length);

// // // example
// for (let i = 0; i < city.length; i++) {
//   console.log("character of city", city[i]);
// }

// console.log("last letter of chennai", city[city.length - 1]);

// // 2. charAt
// // syntax
// // string.charAt(pos)

// console.log("position of chennai", city.charAt(4));

//====================================================================
// changing the case
// change alphabet case
// string.toUpperCase()
// string.toLowerCase()

// let country = "India";
// console.log("india in default", country);
// console.log("India in uppercase", country.toUpperCase());

// country = "AMERICA";
// console.log(country.toLowerCase());
