function Calcl(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (e) {
  const display = document.getElementById("display");
  const allowedKeys = ["0","1","2","3","4","5","6","7","8","9", "+", "-", "*", "/", ".", "(", ")"];

  if (allowedKeys.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

function Minus() {
  display.value = display.value.slice(0, -1);
}