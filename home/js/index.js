const newTabButton = document.getElementById("newTabBtn")

function newTab () {
    window.open("", "_blank")
}

newTabButton.onclick = newTab