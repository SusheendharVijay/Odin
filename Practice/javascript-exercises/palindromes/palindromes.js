const palindromes = function (string) {
  string = string.toLowerCase();
  let punctuation = [",", ".", " ", "!", "'"];

  for (let punc of punctuation) {
    if (string.includes(punc)) {
      string = string.split(punc).join("");
    }
  }

  return string === string.split("").reverse().join("");
};

palindromes("A car, a man, a maraca.");
module.exports = palindromes;
