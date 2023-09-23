const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")

function ordinalSuffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

const date = new Date()
let hour = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

hour = (hour < 10) ? "0" + hour : hour
min = (min < 10) ? "0" + min : min
sec = (sec < 10) ? "0" + sec : sec

const time = hour + ":" + min + ":" + sec
timeElement.innerText = time

var dateString = ordinalSuffix(date.getDate())
dateString += ' of ' + date.toLocaleString('en-US', { month: 'long' })
dateString += ' ' + date.getFullYear()
dateElement.innerText = dateString

const getTime = () => {
    const date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    hour = (hour < 10) ? "0" + hour : hour
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    const time = hour + ":" + min + ":" + sec
    timeElement.innerText = time

    var dateString = ordinalSuffix(date.getDate())
    dateString += ' of ' + date.toLocaleString('en-US', { month: 'long' })
    dateString += ' ' + date.getFullYear()
    dateElement.innerText = dateString
}

setInterval(getTime, 1000)