copyElements = collection => collection.slice();

const title = document.createElement("h1");
title.textContent = document.getElementsByTagName("title")[0].textContent;

const ingredientsHeader = document.createElement("h3");
ingredientsHeader.textContent = "Ingredients";

const stepsHeader = document.createElement("h3");
stepsHeader.textContent = "Steps";

const lis = document.getElementsByTagName("li");

const ingredients = [];
const steps = [];

for (let li of lis) {
    if (li.className.includes('ingredient_ingredient')) ingredients.push(li);
    else if (li.className.includes('preparation_step')) steps.push(li);
}

document.head.textContent = "";
document.body.textContent = "";

document.body.appendChild(title);
document.body.appendChild(ingredientsHeader);
for (let ingredient of ingredients) {
    document.body.appendChild(ingredient);
}
document.body.appendChild(stepsHeader);
for (let step of steps) {
    document.body.appendChild(step);
}