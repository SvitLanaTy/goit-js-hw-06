const backgroundColor = document.querySelector(`.color`);
const changeColorButton = document.querySelector(`button.change-color`);
const body = document.querySelector(`body`);

changeColorButton.addEventListener(`click`, onButtonClick);

function onButtonClick(event) {
  const currentColor = getRandomHexColor();
  backgroundColor.textContent = currentColor;
  body.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
