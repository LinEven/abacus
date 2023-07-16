let displayValue = "";
let operator = "";
let operand1 = null;
let operand2 = null;
let result = null;

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendDecimal(decimal) {
  if (!displayValue.includes(decimal)) {
    displayValue += decimal;
    updateDisplay();
  }
}

function setOperator(op) {
  operator = op;
  operand1 = parseFloat(displayValue);
  displayValue = "";
}

function calculate() {
  operand2 = parseFloat(displayValue);
  if (operator === "+") {
    result = operand1 + operand2;
  } else if (operator === "-") {
    result = operand1 - operand2;
  } else if (operator === "*") {
    result = operand1 * operand2;
  } else if (operator === "/") {
    result = operand1 / operand2;
  }

  //displayValue = result.toString();
  displayValue= result.toLocaleString();//千分位
  updateDisplay();

  // Reset variables for the next calculation
  operator = "";
  operand1 = null;
  operand2 = null;
  result = null;
}

function clearDisplay(){
    displayValue = "";
    updateDisplay();    
}
function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

function handleKeyboardInput(event) {
  const { key } = event;
  if (/\d/.test(key)) {
    appendNumber(key);
  } else if (key === ".") {
    appendDecimal(key);
  } else if (/[+\-*/]/.test(key)) {
    setOperator(key);
  } else if (key === "=" || key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  } else if (key === "Escape") {
    displayValue = "";
    updateDisplay();
  }
}

document.addEventListener("keydown", handleKeyboardInput);