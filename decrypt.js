var decrypt = function (cipherText, amount) {
  if (amount < 0) {
    return caesarShift(cipherText, amount + 26);
  }
  var output = "";
  for (var i = 0; i < cipherText.length; i++) {
    var c = cipherText[i];
    var code = cipherText.charCodeAt(i);
    var num = (code - 97 - amount) > 0 ? (code - 97 - amount) : ((code - 97 - amount) + 26);
    c = String.fromCharCode((num % 26) + 97);
    output += c;
  }

  return output;
}

console.log(decrypt("Wiceckqyk", 2))

module.exports = decrypt;