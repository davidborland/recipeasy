const divs = document.getElementsByTagName('div');

for (let div of divs) {
    if (div.className.includes("modal")) div.remove();
}