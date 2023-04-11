const categoriesItemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, categoriesItemEl.length);
categoriesItemEl.forEach((element) => {
  const titleItemEl = element.querySelector(`h2`);

  const itemAnimalEl = element.querySelectorAll(`li`);

  console.log(`Category:`, titleItemEl.textContent);
  console.log(`Elements:`, itemAnimalEl.length);
});
