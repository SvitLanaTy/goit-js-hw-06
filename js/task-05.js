const input = document.querySelector(`input#name-input`);
const output = document.querySelector(`span#name-output`);

const handeleFotmInput = () =>
  input.value === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = input.value);

input.addEventListener("input", handeleFotmInput);
