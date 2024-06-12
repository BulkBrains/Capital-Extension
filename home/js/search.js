const speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognitionAlternative

// Search
const google = "https://google.com/search?q="
const bing = "https://bing.com/search?q="
const duckduckgo = "https://duckduckgo.com/?q="
const qwant = "https://qwant.com/?q="
const youtube = "https://youtube.com/results?search_query="
const tiktok = "https://tiktok.com/search?q="
const wikipedia = "https://wikipedia.org/w/index.php?search="
const amazon = "https://amazon.co.uk/s?k="

const searchBox = document.getElementById("searchBox")

let engineBtns = document.querySelector(".search-select-content").querySelectorAll("a")

for (let link of engineBtns) {
    link.addEventListener("click", function() {
        let title = link.getAttribute("title").toLowerCase()
        goSearch(title)
    })
}

function goSearch(engine) {
    let text = encodeURIComponent(searchBox.value)

    if (engine === "google") {
        window.open(google + text, "_self")
    }else if (engine === "bing") {
        window.open(bing + text, "_self")
    }else if (engine === "duckduckgo") {
        window.open(duckduckgo + text, "_self")
    }else if (engine === "qwant") {
        window.open(qwant + text, "_self")
    }else if (engine === "youtube") {
        window.open(youtube + text, "_self")
    }else if (engine === "tiktok") {
        window.open(tiktok + text, "_self")
    }else if (engine === "wikipedia") {
        window.open(wikipedia + text, "_self")
    }else if (engine == null) {
        window.open(google + text, "_self")
    }else if (engine === "amazon") {
        window.open(amazon + text + "&tag=bulkbrains-21", "_self")
    }
}

const form = document.getElementById("searchForm")
const search = document.getElementById("go")
const micBtn = document.getElementById("mic")
const micIcon = document.getElementById("micIcon")
const micMIcon = document.getElementById("micMIcon")

form.addEventListener("submit", e => {
    e.preventDefault()

    if (localStorage.getItem("engine") === "") {
        goSearch("bing")
    }else{
        goSearch(localStorage.getItem("engine"))
    }
})

micBtn.onclick = function () {
    console.log("Mic")
}

if (speechRecognition) {
    micBtn.style.display = "block"

    const speech = new speechRecognition()

    micBtn.onclick = function () {
        if (micIcon.srcset === "mic") {
            speech.start()
        } else {
            speech.stop()
        }
    }

    speech.onstart = function () {
        micIcon.style.display = "none"
        micMIcon.style.display = "block"
    }

    speech.onend = function () {
        micIcon.style.display = "block"
        micMIcon.style.display = "none"
    }

    speech.onresult = function (event) {
        let current = event.resultIndex
        let transcript = event.results[current][0].transcript

        if (transcript.toLowerCase().trim() === "stop recording") {
            speech.stop()
        } else if (!searchBox.value) {
            searchBox.value = transcript
        } else {
            if (transcript.toLowerCase().trim() === "go") {
                form.submit()
            } else if (transcript.toLowerCase().trim() === "reset input") {
                searchBox.value = ""
            } else {
                searchBox.value = transcript
            }
        }
    }
}


// Search Engine Default
function defaultEngine() {
    var engine = document.getElementById("engine").value

    document.cookie = "engine=" + engine + "; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/"
}