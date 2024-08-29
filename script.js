const getSchemeBtn = document.getElementById("get-scheme-btn")
const colourSchemeSelector = document.getElementById("colour-scheme-selector")
const colourSelector = document.getElementById("colour-selector")

let colourScheme = "monochrome"
let selectedColour = "000000"


function getColourScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColour}&count=5&mode=${colourScheme}`)
        .then(response => response.json())
        .then(data => {
            const coloursArray = data.colors
            const hexCodes = coloursArray.map((color) => {
                return color.hex.value
            })
            for (let i = 0; i < hexCodes.length; i++) {
                const currentHexCode = hexCodes[i]
                const backgroundElement = document.getElementById(`colour-${i}`)
                const hexCodeElement = document.getElementById(`hex-${i}`)
                backgroundElement.style.backgroundColor = currentHexCode
                hexCodeElement.textContent = currentHexCode
            }
        })

}

getSchemeBtn.addEventListener("click", getColourScheme)

colourSchemeSelector.addEventListener("change", function (e) {
    colourScheme = e.target.value
})

colourSelector.addEventListener("change", function (e) {

    selectedColour = e.target.value.substring(1)
})