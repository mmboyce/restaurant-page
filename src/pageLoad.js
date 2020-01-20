import * as CONSTANTS from './modules/restInfo'

const carbLoad = CONSTANTS.default.carbLoad

function loadHeader() {
    const header = document.createElement("div")

    header.id = "header"

    const title = document.createElement("h1")
    title.textContent = carbLoad
    title.className = "carbLoad"

    header.appendChild(title)
    return header
}

function loadBody() {
    const body = document.createElement("div")
    body.id = "body"

    const aboutUs = document.createElement("div")
    aboutUs.id = "aboutButton"
    aboutUs.className = "nav"

    const menu = document.createElement("div")
    menu.id = "menuButton"
    menu.className = "nav"

    aboutUs.textContent = "About"
    menu.textContent = "Menu"

    body.appendChild(aboutUs)
    body.appendChild(menu)
    return body
}

function loadFooter() {
    const footer = document.createElement("div")
    footer.id = "footer"

    const credit = document.createElement("p")
    credit.id = "credit"

    const link = document.createElement("a")
    link.href = "http://mmboyce.github.io"
    link.textContent = "W Mathieu Mimms-Boyce"

    credit.textContent = "Created by "
    credit.appendChild(link)

    footer.appendChild(credit)
    return footer
}

export { loadHeader, loadBody, loadFooter }