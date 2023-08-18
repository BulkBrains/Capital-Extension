document.addEventListener("DOMContentLoaded", function() {
    var setHomepageButton = document.getElementById("setHomepageButton")
    setHomepageButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.storage.sync.set({ homepage: "../home/index.html" }, function() {
            chrome.tabs.update(tabs[0].id, { url: "../home/index.html" })
            })
        })
    })
})