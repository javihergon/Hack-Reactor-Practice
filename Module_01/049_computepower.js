/*
Write a function called "computePower".
Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 
var output = computePower(2, 3);
console.log(output); // --> 8
*/

function computePower(num, exponent) {
  // your code here
  if(exponent === 0) {
    return 1;
  } else {
    return num * computePower(num, exponent - 1);
  }
}