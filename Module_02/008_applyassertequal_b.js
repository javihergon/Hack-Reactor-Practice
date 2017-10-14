/*

Write an "assertEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Note: This is a simple (almost correct) implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every


// Your assertion function:
function assertEqual(actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
             return item === expected[i];
  });
    if(areEqualLength && areEqualItems) {
            console.log('passed');
    } else {
            console.log('FAILED ' + testName + ' Expected "' + expected + '", but got "' + actual + '"');
    }
}

// Code under test:
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch = callbackFunction(element);
  });
  return doesEveryElementMatch;
}

var output = [1, 5, 8, 15];
assertEqual([1, 5, 8, 15], output, 'should pass for equal arrays');

var output = [0];
assertEqual([0,5], output, 'should pass for equal arrays');

var output = ["Javier", "Elena"];
assertEqual(["Javier"], output, 'should pass for equal arrays');