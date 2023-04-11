const input = document.querySelector(`input[data-length="6"]`);
input.addEventListener("blur", onInputBlur);

function onInputBlur(eve) {
  if (eve.currentTarget.value.length == input.dataset.length) {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
  } else {
    input.classList.add(`invalid`);
    input.classList.remove(`valid`);
  }
}
