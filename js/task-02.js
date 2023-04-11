const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector(`ul#ingredients`);

const makeIngredientsList = (ingredient) => {
  return ingredients.map((ingredient) => {
    const ingredientsItemEl = document.createElement(`li`);
    ingredientsItemEl.textContent = ingredient;
    ingredientsItemEl.classList.add(`item`);

    return ingredientsItemEl;
  });
};

const elements = makeIngredientsList(ingredients);
ulEl.append(...elements);

// console.log(navEl);
