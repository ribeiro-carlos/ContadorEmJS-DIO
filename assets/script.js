var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var btnIncrement = document.getElementById("increment");
btnIncrement.addEventListener("click", funcaoIncrement);

var btnDecrement = document.getElementById("decrement");
btnDecrement.addEventListener("click", funcaoDecrement);

function funcaoIncrement() {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}
function funcaoDecrement() {
  if (currentNumber > 0) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}
