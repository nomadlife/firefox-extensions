function openPage() {
    document.getElementsByClassName('sumome-share-client-wrapper')[0].remove()
    document.getElementsByClassName('smartbar-popup')[0].remove()
}
browser.browserAction.onClicked.addListener(openPage);