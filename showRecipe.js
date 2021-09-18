function copyElements(collection) {
    var a = [];
    for (let item of collection) {
        a.push(item);
    }

    return a;
}

var title = document.createElement("h1");
title.textContent = document.getElementsByTagName("title")[0].textContent;

var ingredientsHeader = document.createElement("h3");
ingredientsHeader.textContent = "Ingredients";

var ingredients = copyElements(document.getElementsByClassName("recipe-ingredients"));
ingredients.forEach(d => d.className = "");

var stepsHeader = document.createElement("h3");
stepsHeader.textContent = "Steps";

var steps = copyElements(document.getElementsByClassName("recipe-steps"));
steps.forEach(d => d.className = "");

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