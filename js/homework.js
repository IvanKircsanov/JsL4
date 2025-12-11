// Task 1
let field1 = "Hello";
let field2 = "World";

if (field1 !== "" && field2 !== "") {
  console.log("Both fields are filled");
} else {
  console.log("Not all fields are filled");
}

// Task 2
let num1 = 7;
let num2 = 5;
let sum = num1 + num2;

if (sum > 10) {
  console.log("Sum is greater than 10");
} else {
  console.log("Sum is less than or equal to 10");
}

// Task 3
let text = "I am learning JavaScript now.";

if (text.includes("JavaScript")) {
  console.log("Text contains the word JavaScript");
} else {
  console.log("Text does not contain the word JavaScript");
}

// Task 4
let number = 15;

if (number > 10 && number < 20) {
  console.log("The number is in the range 10 to 20");
} else {
  console.log("The number is not in the range 10 to 20");
}

// Task 5
let name = "Ivan";
let email = "i.kircsanov@gmail.com";
let password = "Password123";

if (
  name.length >= 3 &&
  email.includes("@") &&
  email.includes(".") &&
  password.length >= 6
) {
  console.log("Redirect to another page");
} else {
  console.log("Error: incorrect filling");
}
