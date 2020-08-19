function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sum(array) {
  return array.reduce((sum, element) => sum + element, 0);
}

function multiply(array) {
  return array.reduce((product, element) => product * element);
}

function power(num, exp) {
  return num ** exp;
}

function factorial(num) {
  if (num === 1) return 1;
  if (num === 0) return 1;

  return num * factorial(num - 1);
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
