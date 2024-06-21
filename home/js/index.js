const newTabButton = document.getElementById("newTabBtn")

function newTab () {
    window.open("index.html", "_blank")
}

newTabButton.onclick = newTab