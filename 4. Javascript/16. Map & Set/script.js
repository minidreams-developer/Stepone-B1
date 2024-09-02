// Data structure
// Map => similar to Object
// key : value
// key can be any data types
// syntax
// let varName = new Map()

let fruits = {};
// let subjects = new Map();

// supporting methods and property
// 1. map.set('key', "value") => adding new property with the key and value passed.
//2. map.get(key) => return property "value" based on key
// 3. map.has(key) => check the existence of the key passed.
// 4. map.clear() => removes all the properties in the map
// 5. map.delete(key) => remove the property based on key
// 6. map.forEach()
// 7. keys()
// 8. values()
// 9. entries()
// 10. size

// Adding a property
// let subjects = new Map();

// subjects.set("name", "John");
// subjects.set("age", 25);
// subjects.set("city", "Chennai");

// Accessing Property
// console.log(subjects.get("name"));
// console.log(subjects.get("city"));

// // check the existance of the property
// console.log(subjects.has("age"));
// console.log(subjects.has("street"));

// console.log("subjects map=>", subjects);
// console.log("size", subjects.size);
// // delete
// subjects.delete("city");
// console.log(subjects);

// // clear
// subjects.clear();
// console.log("subjects after cleared", subjects);
// console.log("size", subjects.size);

// -------------- we can put any data types as key-------------
// key as object

let userDetails = new Map();

let john = { name: "john" };
let jack = { name: "Jack" };
let may = { name: "Mary" };

userDetails.set(john, "Admin").set(jack, "Sales").set(may, "Operations");

// console.log("userDetails", userDetails);

let user = {
  name: "ben",
  age: 34,
  city: "chennai",
};

// Keys()
// console.log(userDetails.keys());

// values()
// console.log(userDetails.values());

// entries()
// console.log(userDetails.entries());

// converting object to map

// Object to Map conversion
// Object.entries()
// we need an existing object
// we need a new map

console.log("user object", user);
// let mapName = new Map(Object.entries(objectName))
let userMap = new Map(Object.entries(user));
userMap.set("street", "3rd street");

console.log("user Map", userMap);

// Map to object conversion
// Object.fromEntries()

let subjects = new Map();

subjects.set("name", "John");
subjects.set("age", 25);
subjects.set("city", "Chennai");

console.log("before changing map", subjects);

let term = Object.fromEntries(subjects);

console.log("After changing map", term);
