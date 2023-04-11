const input = document.querySelector(`#controls input`);
const btnCreate = document.querySelector(`#controls button[data-create]`);
const btnDestroy = document.querySelector(`#controls button[data-destroy]`);
const box = document.querySelector(`div#boxes`);

btnCreate.addEventListener(`click`, onButtonCreateClick);
btnDestroy.addEventListener(`click`, onButtonDestroyClick);

function createBoxes(amount) {
  destroyBoxes();
  let boxes = [];
  let mis = 20;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement(`div`);
    const color = getRandomHexColor();
    mis += 10;
    div.style.backgroundColor = color;
    div.style.width = mis + "px";
    div.style.height = mis + "px";
    boxes.push(div);
  }
  box.append(...boxes);
}

function destroyBoxes() {
  box.innerHTML = "";
}

function onButtonCreateClick(event) {
  createBoxes(input.value);
}

function onButtonDestroyClick(event) {
  destroyBoxes();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
