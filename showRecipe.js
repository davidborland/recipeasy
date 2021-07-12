var title = document.createElement("h1");
title.textContent = document.getElementsByTagName("title")[0].textContent;

var ingredientsHeader = document.createElement("h3");
ingredientsHeader.textContent = "Ingredients";

var ingredients = document.getElementsByClassName("recipe-ingredients")[0];
ingredients.className = "";

var stepsHeader = document.createElement("h3");
stepsHeader.textContent = "Steps";

var steps = document.getElementsByClassName("recipe-steps")[0];
steps.className = "";

document.head.textContent = "";
document.body.textContent = "";

document.body.appendChild(title);
document.body.appendChild(ingredientsHeader);
document.body.appendChild(ingredients);
document.body.appendChild(stepsHeader);
document.body.appendChild(steps);