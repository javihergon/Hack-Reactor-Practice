
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  var letters = word.toLowerCase().split('');
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
  var words = text.toLowerCase().split(' ');
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

findFirstWordWithMostRepeatedChars('These might be things that everyone already knows, but I just wanted to remind everyone of some things');