const fs = require("fs")
const filePath = "pref.json"

const engineForm = document.getElementById("engineForm")

engineForm.onsubmit = (e) => {
    e.preventDefault()
    const engineVal = document.getElementById("engine").value

    fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
          console.error(error)
          return
        }

        const jsonContent = JSON.parse(data)
        jsonContent.engine = engineVal
        const updatedJson = JSON.stringify(jsonContent, null, 2)
      
        fs.writeFile(filePath, updatedJson, "utf8", (error) => {
            if (error) {
                console.error(error)
                return
            }
        })
    })
}