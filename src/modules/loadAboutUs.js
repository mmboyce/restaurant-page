import * as CONSTANTS from './restInfo'

const carbLoadDesc = CONSTANTS.default.carbLoadDesc

function loadAboutUs() {
    const description = document.createElement("div")
    description.id = "description"

    const xButton = document.createElement("div")
    xButton.textContent = "X"
    xButton.id = "closeAboutUs"
    xButton.className = "xButton"

    description.appendChild(xButton)

    // add a new <p> element for each line of the description
    for (let i = 0; i < carbLoadDesc.length; i++) {
        const descLine = document.createElement("p")
        descLine.innerHTML = carbLoadDesc[i]

        description.appendChild(descLine)
    }

    return description
}

export { loadAboutUs }