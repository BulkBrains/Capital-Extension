const body = document.getElementsByTagName("body")[0]
const header = document.getElementById("header")

const photographerElement = document.getElementById("photographer")
const imgLinkElement = document.getElementById("imgLink")

function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "")
    // Parse the r, g, b values
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return [r, g, b]
}

function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

function getContrastingColor(hex) {
    const rgbArray = hexToRgb(hex)
    const brightness = (rgbArray[0] * 299 + rgbArray[1] * 587 + rgbArray[2] * 114) / 1000
    return brightness > 125 ? "black" : "white"
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
    const picInvertColour = getContrastingColor(picAvgColour)

    body.style.setProperty("--primary", picInvertColour)
    body.style.setProperty("--secondary", picAvgColour)
    body.style.setProperty("--secondaryA", picAvgColour + "90")

    console.log(picPhotographer)

    // Sanitize the content before setting innerHTML
    photographerElement.innerHTML = DOMPurify.sanitize(picPhotographer)
    photographerElement.href = picPhotographerURL
    imgLinkElement.href = picURL
})
.catch(error => {
    console.error("Error fetching and parsing data:", error)
})
