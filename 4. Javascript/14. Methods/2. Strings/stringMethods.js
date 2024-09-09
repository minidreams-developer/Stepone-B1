// String Methods
// sub-string => part of a string [single or group of character]
// let name = 'john';

// 'john' => j substring, o substring, jo substring, hn substring, ohn substring.

// Hello, i am boopathi.

// Searching of substring
// 1. string.indexOf() and str.lastIndexOf()
// 2. string.includes()
// 3. string.startsWith()
// 4. string.endsWith()

// 1. string.indexOf(a, b)
// string.indexOf(substring, pos) => return the index or position, return -1
// a => searchString
// b => search start position

let welcome = "Hello, World";
// console.log("search substring", welcome.indexOf("World", 5));
// console.log("find without starting pos", welcome.indexOf("xj"));

// String.lastIndexOf(substring, start pos)
// console.log("search from last index", welcome.lastIndexOf("World"));

// // // 2. string.includes(substring, pos) => true/false
// console.log("search based on includes =>", welcome.includes("kk"));

// //3. String.startsWith(substring, pos)
// console.log("search based on startswith", welcome.startsWith("Hello"));

// // 4. string.endsWith(substring, pos)
// console.log("search based on ends with", welcome.endsWith("d"));

// Getting a substring
// Slice(a, b)
// a => start pos
// b => end pos

// console.log("Slice based on pos", welcome.slice(0, 6));
