let firstNumber = "";
let sign;
let secondNumber = "";
let screen = document.querySelector("#screen");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  } else {
    return a / b;
  }
}

function operate(firstNumber, sign, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if (sign === "+") {
    return add(firstNumber, secondNumber);
  } else if (sign === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (sign === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (sign === "/") {
    return divide(firstNumber, secondNumber);
  }
}

function clear() {
  firstNumber = "";
  sign = undefined;
  secondNumber = "";
  screen.textContent = "0";
}

let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => buttonController(event));
});

function buttonController(event) {
  if (
    (event.target.id === "1" ||
      event.target.id === "2" ||
      event.target.id === "3" ||
      event.target.id === "4" ||
      event.target.id === "5" ||
      event.target.id === "6" ||
      event.target.id === "7" ||
      event.target.id === "8" ||
      event.target.id === "9" ||
      event.target.id === "0") &&
    sign === undefined
  ) {
    firstNumber += event.target.id;
    screen.textContent = firstNumber;
  }

  if (
    (event.target.id === "+" ||
      event.target.id === "-" ||
      event.target.id === "*" ||
      event.target.id === "/") &&
    firstNumber
  ) {
    sign = event.target.id;
    screen.textContent = firstNumber + sign;
  }

  if (firstNumber && sign) {
    if (
      event.target.id === "1" ||
      event.target.id === "2" ||
      event.target.id === "3" ||
      event.target.id === "4" ||
      event.target.id === "5" ||
      event.target.id === "6" ||
      event.target.id === "7" ||
      event.target.id === "8" ||
      event.target.id === "9" ||
      event.target.id === "0"
    ) {
      secondNumber += event.target.id;
      screen.textContent = firstNumber + sign + secondNumber;
    }
  }

  if (firstNumber && sign && secondNumber) {
    if (event.target.id === "equals") {
      screen.textContent = operate(firstNumber, sign, secondNumber);
    } else if (
      event.target.id === "+" ||
      event.target.id === "-" ||
      event.target.id === "*" ||
      event.target.id === "/"
    ) {
      firstNumber = operate(firstNumber, sign, secondNumber);
      sign = event.target.id;
      secondNumber = "";
      screen.textContent = firstNumber + sign;
    }
  }

  if (event.target.id === "clear") {
    clear();
  }
}

// DARK MODE logic
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "☀️ Light Mode";
  } else {
    themeToggleBtn.textContent = "🌙 Dark Mode";
  }
});
