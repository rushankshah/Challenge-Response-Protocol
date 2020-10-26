const plainText = process.argv[2]
const amount = process.argv[3]
console.log(plainText)

var caesarShift = function (plainText, amount) {
  if (amount < 0) {
    return caesarShift(plainText, amount + 26);
  }
  var output = "";
  for (var i = 0; i < plainText.length; i++) {
    var c = plainText[i];
    console.log(c)
    var code = plainText.charCodeAt(i);
    c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    output += c;
    console.log(output)
  }
  return output;
};

console.log(caesarShift(plainText, amount))