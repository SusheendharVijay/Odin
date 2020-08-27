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

const buttons = document.querySelector(".numberBtns");
const operatorBtns = document.querySelector(".operatorBtns");
const clearBtn = document.getElementById("clearBtn");
const displayText = document.getElementById("displayText");
for (let i = 0; i <= 9; i++) {
  let newDiv = document.createElement("div");
  newDiv.textContent = i;
  newDiv.setAttribute("id", "numbers");
  buttons.appendChild(newDiv);
}

let operators = ["+", "-", "*", "/"];

for (let i = 0; i < operators.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.textContent = operators[i];
  newDiv.setAttribute("id", "operators");
  operatorBtns.appendChild(newDiv);
}

clearBtn.addEventListener("click", (event) => {
  displayText.textContent = "";
});
const numberButtons = [...buttons.querySelectorAll("div")];
const operatorButtons = [...operatorBtns.querySelectorAll("div")];
const equalSign = document.querySelector(".equalSign");
for (let number of numberButtons) {
  number.addEventListener("click", (event) => {
    let numVal = event.target.textContent;
    let displayedText = displayText.textContent;
    displayText.textContent = displayedText + numVal;
  });
}
for (let operator of operatorButtons) {
  operator.addEventListener("click", (event) => {
    let operation = event.target.textContent;
    let displayedText = displayText.textContent;
    displayText.textContent = displayedText + operation;
  });
}
equalSign.addEventListener("click", evaluate);

function evaluate() {
  let displayedText = displayText.textContent;
  let literals = displayedText.split("");
  let num1 = Number(literals[0]);
  let num2 = Number(literals[2]);
  let operation = displayedText[1];

  let evaluated = operate(num1, operation, num2);
  displayText.textContent = evaluated.toString();
}
