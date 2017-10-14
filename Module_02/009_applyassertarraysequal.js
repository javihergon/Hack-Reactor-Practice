/*

Write an "assertArraysEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test BOTH the functions in the provided code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Your assertion function:
function assertArraysEqual(actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
      return item === expected[i];
  });
  if (areEqualLength && areEqualItems) {
      console.log('passed ' + testName);
  } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
  
}
// Your code under test:
function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(callbackFunction(element));
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}
function square(numbers) {
  return map(numbers, function(num) {
    return num * num;
  });
}

function dividedBy(numbers, num) {
  return map(numbers, function(number) {
    return number / num;
  });
}
assertArraysEqual(cubeAll([1, 0, 2, 4]), [1, 0, 8, 64], 'successfully map an array');
assertArraysEqual(square([1, 0, 2, 4]), [1, 0, 4, 16], 'successfully map an array');
assertArraysEqual(dividedBy([4, 8, 12], 2), [2, 4, 5], 'successfully map an array');