const caesar = function (string, shift) {
  if (shift > 26) {
    shift = shift % 26;
  }

  if (shift < -26) {
    shift = -1 * Math.abs(shift % 26);
  }
  let array = string.split("");

  const encodedArray = array.map((char) => {
    if (65 <= char.charCodeAt() && char.charCodeAt() <= 90) {
      // A-Z

      let code = char.charCodeAt();
      code += shift;
      if (code < 65) {
        code = 90 - (65 - code - 1);
      } else if (code > 90) {
        code = code - 90 - 1 + 65;
      }
      return String.fromCharCode(code);
    }
    if (97 <= char.charCodeAt() && char.charCodeAt() <= 122) {
      //a-z

      let code = char.charCodeAt();
      code += shift;
      if (code < 97) {
        code = 122 - (97 - code - 1);
      } else if (code > 122) {
        code = code - 122 - 1 + 97;
      }

      return String.fromCharCode(code);
    }
    return char;
  });
  return encodedArray.join("");
};

console.log(caesar("Z", 100));
module.exports = caesar;
