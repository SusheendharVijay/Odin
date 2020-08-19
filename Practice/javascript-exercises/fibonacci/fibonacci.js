const fibonacci = function (number) {
  if (number == 1) {
    return 1;
  }

  if (number == 2) {
    return 1;
  }
  if (number <= 0) {
    return "OOPS";
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
};

module.exports = fibonacci;
