// objects
let user = {
  name: "prince",
};

console.log(user.address); // undefined comes as an error

// optional chaining => ?.
console.log(user?.address?.street); // undefined comes as an result
