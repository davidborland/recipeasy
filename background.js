browser.contextMenus.create({
  id: "recipeasy",
  title: "Recipeasy"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "recipeasy") {
    browser.tabs.executeScript({
      file: "recipeasy.js"
    });
  }
});