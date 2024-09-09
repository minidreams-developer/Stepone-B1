// objects
let user = {
  name: "prince",
};

console.log("user", user.name);

// console.log("address", user.address.street);

// console.log(user.address); // undefined comes as an error

// optional chaining => ?.
// user?.address?.street
console.log("address =>", user?.address?.street); // undefined comes as an result
