browser.contextMenus.create({
  id: "removeOverlay",
  title: "Remove overlay"
});

browser.contextMenus.create({
  id: "showRecipe",
  title: "Show recipe"
});

browser.contextMenus.onClicked.addListener(function(info) {
  switch (info.menuItemId) {
    case "removeOverlay":
      browser.tabs.executeScript({
        file: "removeOverlay.js"
      });

      break;

    case "showRecipe":
      browser.tabs.executeScript({
        file: "showRecipe.js"
      });
      
      break;
  }
});