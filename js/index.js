document.addEventListener("DOMContentLoaded", function() {
    const setHomepageButton = document.getElementById("setHomepageButton")
    const goSettings = document.getElementById("goSettings")

    setHomepageButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.storage.sync.set({ homepage: "../home/index.html" }, function() {
            chrome.tabs.update(tabs[0].id, { url: "../home/index.html" })
            })
        })
    })

    goSettings.addEventListener('click', function() {
        chrome.tabs.create({ url: "../home/settings.html" })
    })
})