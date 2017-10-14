/*

Write an "assertEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function in a series of test cases to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.

*/

// Assertion function:

function assertEqual(actual, expected, testName) {
  if(actual === expected) {
     console.log('passed');
  } else {
     console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')  ;  
  }
}


// Code Under Test:

function square(n) {
  return n * n;
}

var output = square(5);
assertEqual(22, output, 'to be 25');
// Calls to 'assertEqual':