function moveAllWindowsToNextScreen() {
  var allScreenClients = workspace.windowList();
  var screenClients = allScreenClients.filter(function(client) {
    return !client.specialWindow;
  });

  for (var client of screenClients) {
    var currScreen = workspace.screenAt(client.pos);
    var screenIndex = workspace.screens.indexOf(currScreen);

    screenIndex++;

    if (screenIndex > workspace.screens.length - 1)
      screenIndex = 0;

    workspace.sendClientToScreen(client, workspace.screens[screenIndex]);
  }
}

registerShortcut("Move All Windows To Next Screen", "Move All Windows To Next Screen", "", moveAllWindowsToNextScreen);
