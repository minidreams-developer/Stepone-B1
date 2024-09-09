// Number methods
// can use _ inbetween them
// let number = 1_24_399_768_866;
// let billion = 1_000_000_000;
// console.log("number->", number);
// console.log("billion type", billion);

// using e
// 5ooo => 5e3
// console.log(1e5); // 1 * 100000
// console.log(4e4); // 4 * 1000   40000
// console.log(3.5e3); // 3.5 * 1000

// console.log(4e-4); // 4 * 1/1000   0.0004
//                                 //      0.0004

// Methods - Numbers
//1. Math.floor() => Rounds down
// console.log(Math.floor(23.99));

// console.log(Math.floor(-4.99));

// 2. Math.ceil() => Rounds up

// console.log(Math.ceil(23.99));
// console.log(Math.ceil(23.01));

// 3. Math.round() => rounds based on base point
// 10.78, 10.23, 10.51
// .5 => base point
// if num > .5 => round up
// if num < .5 => round down

// console.log(Math.round(23.51)); // decimal value is greater than .50
// console.log(Math.round(23.35)); // round down

// 4. Math.trunc()
// removes the decimal values
// console.log(Math.trunc(15.89));
// console.log(Math.trunc(12.13245453426));

// 5. Math.random() => 0.0 to 0.99
// console.log("random number", Math.random());
// // generate a random number between 0 to 100
// console.log(Math.ceil(Math.random() * 10000));

// 6. Math.min()  => find the minimum number
// console.log("min number", Math.min(1, 0, 56, -3));

// // 7. Math.max()  => find the maximum number
// console.log("max number", Math.max(1, 0, 56, -3));

// // 8. Math.pow() => give it exponential value 4 power 4 => 4^4^4  = 64
// Math.pow(baseDigit, power)
// console.log(Math.pow(2, 5)); // 2^5 => 2*2*2*2*2 =>32

// // 9. isNaN()  => find it's not a number => true
// NaN => Not a Number
// console.log(isNaN("hello"));
// console.log(isNaN(878));

// // 10. parseInt() => extract whole number
// console.log(parseInt("12px"));
// console.log(parseInt("123Hello"));
// console.log(parseInt("12.5px"));
// console.log(parseInt("Hello123"));

// 11. parseFloat() => also extract the decimal number

// console.log(parseFloat("12px"));
// console.log(parseFloat("123Hello"));
// console.log(parseFloat("12.5px"));
// console.log(parseFloat("12.5987px"));
// console.log(parseFloat("Hello123"));
