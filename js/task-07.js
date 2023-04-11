const input = document.querySelector(`input#font-size-control`);
const text = document.querySelector(`span#text`);

const onInputChangeRange = (event) => {
  text.style.fontSize = `${event.target.value}px`;
};

input.addEventListener("input", onInputChangeRange);
