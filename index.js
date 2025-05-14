let sum1 = 25+75;
console.log(sum1)
let sum = 25+75;
console.log(sum);


let precedence1 = 3 + 4 * 5;
console.log(precedence1);



let precedence2 = (3 + 4) * 5;
console.log(precedence2); 


let precedence3 = 3 * 4 ** 2;
console.log(precedence3); 


let precedence4 = 3 * (4 ** 2);
console.log(precedence4); 

let precedence5 = 10 + 20 / 2 - 5;
console.log(precedence5); 
let precedence6 = (10 + 20) / 2 - 5;
console.log(precedence6);  
let precedence7 = 10 + (20 / 2 - 5);
console.log(precedence7); 

 
let precedence8 = 10 + 20 / (2 - 5);
console.log(precedence8); 



// assignment operator
{
  let a = 10;

a += 5;
console.log(a); 

a -= 3;
console.log(a); 


a *= 2;
console.log(a); 

a /= 4;
console.log(a); 

a %= 5;
console.log(a); 
}


// comparsion operator


let age = 20;
console.log(age >= 18 ? "Can vote" : "Cannot vote"); 


let password = "Secure123";
let minLength = 8;

console.log(password.length >= minLength);


let totalPurchase = 120;
let discountThreshold = 100;

console.log(totalPurchase >= discountThreshold); 

// logic operator


let username = "admin";
let password2 = "12345";

console.log(username === "admin" && password2 === "12345"); 
console.log(username === "guest" || password2 === "12345"); 
let age1 = 17;
let hasParentalConsent = true;

console.log(age1 >= 18 || hasParentalConsent); 


// conditional statements
// 3 types
// 1st type
let num = 5;

if (num > 0) {
  console.log("Number is positive");
}
// 2nd type

let age2 = 18;

if (age2 >= 18) {
  console.log("You can vote!");
} else {
  console.log("Too young to vote.");
}
// 3rd type
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}
// loops type
// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// while loop 
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
// do-while loop
// let userInput;
// do {
//   userInput = prompt("Enter 'yes' to continue:");
// } while (userInput !== "Yes");
//   console.log(
//     "thank you!"
//   );
   
let userInput;
do {
  userInput = prompt("Enter 'yes' to continue:");
} while (userInput !== "yes");
console.log("Thank you!");


// while
 