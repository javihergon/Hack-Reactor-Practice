/*
Use the skeleton provided to write a working implementation.

Notes: 
* Do not leave any functions in the skeleton unused.
* Test that your implementation works.

Specifically -- your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
a) the categorical reasoning displayed by your tests
b) the line(s) of output in the console log saying "passed" coming from those tests

*/

// Skeleton
function average(numbers) {
  // process array of numbers
    return sum(numbers) / numbers.length;
}

function sum(numbers) {
  // process array of numbers
   return numbers.reduce(function(num1, num2) {
    return num1 + num2;
  }, 0);
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    return 'passed';
  } else {
    return 'FAILED [' + testName + '] Expected "' + expected + '" but it got "' + actual + '"';
  }
}  

console.log(assertEqual(average([2, 3, 6, 9]), 5, 'to calculate the average'));
console.log(assertEqual(sum([2, 3, 6, 8]), 20, 'to add all numbers'));