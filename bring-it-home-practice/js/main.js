// *Variables*
// Create a variable and console log the value
let variable;
console.log(variable);

// Create a variable, add 10 to it, and alert the value

let v = 10;
alert(v);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtract(a) {
  let b = a - 4;
  alert(b);
}
subtract(1);

// Create a function that divides one number by another and returns the remainder

function devide(a, b) {
  let c = a % b;
  alert(c);
}
devide(5, 2);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function conditional(a, b) {
  let c = a + b;
  if (c >= 50) {
    alert("Jumanji!");
  } else {
    alert(c);
  }
}
conditional(30, 6);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply(a, b, c) {
  let d = a * b * c;
  if (d % 3 === 0) {
    alert("ZEBRA");
  } else {
    alert(d);
  }
}
multiply(3, 2, 2);
