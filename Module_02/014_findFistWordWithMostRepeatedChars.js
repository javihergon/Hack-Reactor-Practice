
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  var letters = word.split('');
  // Count the instances of each letter
  var count = {};
  letters.forEach(function(letter) {
    if(count[letter] !== undefined) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  });
  var highest = 0;
  // Iterate all the counts and find the highest
    for(var key in count) {
        if(count[key] > highest) {
          highest = count[key];
        }
    }
  // Return this word's max repeat count
  return highest; 
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var words = text.split(' ');
  // For each word...
  words.forEach(function(word) {
    var repeatCountForWord = findMaxRepeatCountInWord(word);
     //  If that max repeat count is higher than the overall max repeat count, then
            //    update wordWithMaxRepeatCount
    if(repeatCountForWord > maxRepeatCountOverall) {
      //    update maxRepeatCountOverall
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = word;
    }
  });
  return wordWithMaxRepeatCount;
}

(findMaxRepeatCountInWord('ooopeiaelskf'), 3, 'finds max repeated letters');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your space'), 'Limit', 'finds max repeats word when no other word has repeats');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your spaaace'), 'spaaace', 'finds max repeats word when other words have repeats');
assertEqual(findFirstWordWithMostRepeatedChars('Limit your spaces'), 'Limit', 'finds 1st word with max repeats when there are ties');
