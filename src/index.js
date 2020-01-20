import { loadHeader, loadBody, loadFooter } from './pageLoad'
import { loadMenu } from './modules/loadMenu'
import { loadAboutUs } from './modules/loadAboutUs'

const content = document.querySelector("#content")

const header = loadHeader()
let body = loadBody()
const footer = loadFooter()

content.appendChild(header)
content.appendChild(body)
content.appendChild(footer)

const menu = loadMenu()
const aboutUs = loadAboutUs()

const aboutButton = document.querySelector("#aboutButton")
const menuButton = document.querySelector("#menuButton")

aboutButton.addEventListener("click", () => {
    content.replaceChild(aboutUs, body)

    const xButton = document.querySelector("#closeAboutUs")
    xButton.addEventListener("click", () => {
        content.replaceChild(body, aboutUs)
    })
})

menuButton.addEventListener("click", () => {
    content.replaceChild(menu, body)

    const xButton = document.querySelector("#closeMenu")
    xButton.addEventListener("click", () => {
        content.replaceChild(body, menu)
    })
})