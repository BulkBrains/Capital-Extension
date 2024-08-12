const engineForm = document.getElementById("engineForm")
const yearElement = document.getElementById("year")

yearElement.innerText = new Date().getFullYear()

engineForm.onsubmit = (e) => {
    e.preventDefault()
    const engineVal = document.getElementById("engine").value
    localStorage.setItem("engine", engineVal)
}