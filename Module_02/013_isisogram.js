/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 

Write and test a function that determines whether a string is an isogram. 

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram. 
* Ignore case.
* Follow the pseudocode exactly!

*/

function isIsogram(text) {
  var letters  = text.toLowerCase().split('');
  return letters.length === new Set(letters).size;
  
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
}
isIsogram('text');  //=> false
isIsogram('Javier');  //=> true