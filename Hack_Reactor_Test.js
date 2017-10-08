  // Given an array of numbers, return a number representing the most occurences of a same value

// Test Case:
highestFrequencyNum([5, 1, 5, 0, 2, 2, 2]);
//{}
//{5: 1}
//{5: 1, 1: 1}
//{5: 2, 1: 1}

//{5: 2, 1: 1, 0: 1, 2: 3}


function highestFrequencyNum(array) {
   var obj = {};
   for(var i = 0; i < array.length; i++) {
     if(obj[array[i]]) {
       obj[array[i]] = obj[array[i]] + 1;
     } else {
       obj[array[i]] = 1;
     }
   }
  return obj;
}
