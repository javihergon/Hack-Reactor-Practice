/* Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:
*/
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);



function findPairForSum(integers, target) {
  var numbers = [];
  for(var i= 0; i < integers.length - 1; i++) {
    for(var j = i + 1; j < integers.length; j++) {
      if (integers[i] + integers[j] === target) {
        numbers.push(integers[i], integers[j]); 
      }
    }
  }
  return numbers;
}

console.log(pair); // --> [4, 5]