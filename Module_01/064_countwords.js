/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {
  // your code here
  var obj = {};
  var words = str.split(' ');
  if(str === '') {
       return obj;
  } else {
    for(var i = 0; i < words.length; i++) {
      var key = words[i];
      if(obj[key] !== undefined) {
        obj[key] = obj[key] + 1
      } else {
        obj[key] = 1;
      }
    }
  }
  return obj;
}