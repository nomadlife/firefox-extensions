(function() {

  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      console.log('command, beastify');
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });

})();
