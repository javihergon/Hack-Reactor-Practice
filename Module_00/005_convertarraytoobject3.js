/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
  // your code here
var newArray = [];
  for(var i = 0; i < array.length; i++) {
      var obj = {};
    for(var j = 0; j < array[i].length; j++) {
      for(var x = 0; x < array[i][j].length; x++) {
        obj[array[i][j][x]] = array[i][j][x+1];
        x++;
      }
    }
    newArray.push(obj);
  }
  return newArray;
}