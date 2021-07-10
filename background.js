browser.contextMenus.create({
  id: "recipeasy",
  title: "View recipe"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "recipeasy") {
    browser.tabs.executeScript({
      file: "recipeasy.js"
    });
  }
});