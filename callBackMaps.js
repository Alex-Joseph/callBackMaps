var words = ["ground", "control", "to", "major", "tom"];

var map = function (array, wordCounter) {
  var newMap = [];
  array.forEach( function(word){ newMap.push(wordCounter(word)) });
  return newMap;
}

console.log(map(words, function(word) {
  return word.length;
}) );

// Expected output: [6, 7, 2, 5, 3]
