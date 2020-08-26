function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "Don't divide by zero!, not cool";

  return num1 / num2;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      return "Not a valid a operator!";
  }
}

const buttons = document.querySelector(".numberOperators");
for (let i = 0; i <= 9; i++) {
  let newDiv = document.createElement("div");
  newDiv.textContent = i;
  newDiv.setAttribute("id", "numbers");
  buttons.appendChild(newDiv);
}
