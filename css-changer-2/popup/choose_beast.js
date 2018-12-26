function listenForClicks() {
  document.addEventListener("click", (e) => {
    console.log('e.target.classList:',e.target.classList);
    
    if (e.target.classList.contains("beast")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(browser.tabs.sendMessage(tabs[0].id, {command: "beastify"}))
    }
    else if (e.target.classList.contains("reset")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(browser.tabs.sendMessage(tabs[0].id, {command: "reset"}))
    }
  });
}

browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
.then(listenForClicks)
