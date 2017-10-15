/*

Write an "assertObjectsEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the function provided.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/


// Your assertion function:
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected =  JSON.stringify(expected);
  if (actual === expected) {
    return 'passed [' + testName + ']';
  } else {
    return 'FAILED [' + testName + '] Expected ' + expected + ' but it got ' + actual;
  }
}
// Your code under test:
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj['lastName'];

  if (firstName && lastName) {
    obj.fullName = firstName + ' ' + lastName;
  }

  return obj.fullName;
}

var me ={
  firstName: 'Javier',
  lastName: 'Gonzalez'
};

assertObjectsEqual(addFullNameProp(me), 'Javier Gonzalez', 'It should concam values');

// Your calls to 'assertObjectsEqual':