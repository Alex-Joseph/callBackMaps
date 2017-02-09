var words = ["ground", "control", "to", "major", "tom"];

function mapCreator(array) {
  var output = [];
  array.forEach( function (word) {
    output.push(word.length);
  })
  return output;
}
console.log(mapCreator(words));
// Expected output: [6, 7, 2, 5, 3]
