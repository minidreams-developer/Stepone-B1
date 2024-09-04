// Set Data structure
// It is related to array data structure.
// It cannot hold duplicate values
// Only contain unique values

// Array with duplicate values
let books = ["maths", "science", "physics", "english", "maths"];
// console.log(books);

// Syntax
// let varname = new Set()

let fruits = new Set();
// console.log(fruits);

// Methods and Properties
// set.add()
// set.has()
// set.delete()
// set.clear()
// keys()
// values()
// size

// add()
fruits.add("Apple");
fruits.add("orange");
fruits.add("mango");
fruits.add("Banana");
fruits.add("orange");
fruits.add("mango");

// console.log("Fruits =>", fruits);

// has()
// console.log(fruits.has("strawberry"));

// delete()
fruits.delete("mango");
// console.log("After deletion =>", fruits);
// console.log("size of fruits =>", fruits.size);

// clear()
// fruits.clear();
// console.log("After cleared =>", fruits);

// keys()
// console.log("keys =>", fruits.keys());
// console.log("values =>", fruits.values());

// while, do..while, for()
// for..in, for..of, forEach()

// examples
let nameArray = ["john", "jack", "mary", "john", "jack"];
console.log("Array with duplicate =>", nameArray);

// let demo = new Set();

let nameSet = new Set(nameArray);
console.log(nameSet);
console.log([...nameSet]);
