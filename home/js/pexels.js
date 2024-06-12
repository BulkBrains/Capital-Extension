const body = document.getElementsByTagName("body")[0]
const header = document.getElementById("header")

function invertHex(hex) {

    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

fetch("https://capital.bulkbrains.com/pexels.json")
.then(response => response.json())
.then(result => {
    const picNum = Math.floor(Math.random() * 15)
    header.style.backgroundImage = "url(" + result.photos[picNum].src.original + ")"

    const picURL = result.photos[picNum].url
    const picPhotographer = result.photos[picNum].photographer
    const picPhotographerURL = result.photos[picNum].photographer_url
    const picAvgColour = result.photos[picNum].avg_color
    const picInvertColour = invertHex(picAvgColour.replace("#", ""))

    body.style.setProperty("--primary", "#" + picInvertColour)
    body.style.setProperty("--secondary", picAvgColour)
    body.style.setProperty("--secondaryA", picAvgColour + "90")
})