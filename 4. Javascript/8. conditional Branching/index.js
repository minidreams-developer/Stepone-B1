// Prompt
// name, age, blood group, identity, phone number, address
// Blood donar eligibility

// 1. age               >= 18
// 2. weight            >= 60
// 3. blood group       true
// 4. blood pressure    <= 100
// 5. alcohol           false
// 6. diseases          false

let name = prompt("Enter your name", "john");
let age = Number(prompt("Enter your age", 18));
let bloodGroup = prompt("Enter your blood group", true);
let bloodPressure = Number(prompt("Enter your blood pressure", 100));
let alcohol = prompt("Is donar consumed alcohol?", false);
let diseases = prompt("is Donar has any diseases?", false);
let weight = Number(prompt("Enter your Weight in kg", 70));

console.log(
  `Name ${name}----Age ${typeof age}----BloodGroup ${bloodGroup}-----BloodPressure ${bloodPressure}----alcohol ${alcohol}-----diseases ${diseases}----weight ${weight}`
);

if (age < 18) {
  console.log("Donar is not eligible, under age");
} else if (weight < 60) {
  console.log("Donar is not eligible, under weight");
} else if (bloodPressure > 100) {
  console.log("Donar is not eligible, blood pressure is high");
} else if (bloodGroup === "false") {
  console.log("Donar is not eligible, mismatch blood group");
} else if (diseases === "true") {
  console.log("Donar is not eligible, diseases");
} else if (alcohol === "true") {
  console.log("Donar is not eligible, due to alcohol");
} else {
  console.log("Donar is eligible");
}

// phase 1:
// basic syntax and core concepts

// phase 2:
// DOM => how it going to interact with html and css

// phase 3:
// react.js
