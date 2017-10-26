/*
Find the longest single-word palindrome within a phrase.
The phrase will only contain letters (no symbols, punctuation, or numbers).
Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.
*/ 
function findLongestPalindrome(sentence) {
  // split sentence into words
  var words = sentence.split(' ');
  var palindromes = words.filter(isPalindrome);
  var sorted = palindromes.sort(sortAscendingByLength);
  var largest = sorted.pop();
  // return sentence.split(' ')
  //         .filter(isPalindrome)
  //         .sort(sortAscendingByLength)
  //         .pop();
   return largest;
  // return the largest item in the sorted list
}

function reverseString(string) {
  var stringReversed = string.toLowerCase().split('').reverse().join('');
  return stringReversed;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word.toLowerCase() === reverseString(word);
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length > b.length) {
    return -1;
  } else {
    return 0;
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
  	console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

findLongestPalindrome('alula ana hannah madam minim');

assertEqual(findLongestPalindrome('alula ana hannah madam minim'), 'hannah', 'should return longest palindrome');
assertEqual(findLongestPalindrome('alula ana madam minim'), 'minim', 'should return last palindrome when there are multiples of same length');
assertEqual(findLongestPalindrome('Alula anA MAdam'), 'MAdam', 'should be case insensitive');