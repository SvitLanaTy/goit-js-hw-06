let counterValue = 0;
const counterEl = document.querySelectorAll(`#counter button`);
const valueEl = document.querySelector(`#counter #value`);

const handleDecrementClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const handleIncrementClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

counterEl[0].addEventListener("click", handleDecrementClick);
counterEl[1].addEventListener("click", handleIncrementClick);
