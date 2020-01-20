import { carbLoadDesc, carbLoad, menuItems } from './restInfo'

const content = document.querySelector("#content")


function loadHeader() {
    const header = document.createElement("div")

    header.id = "header"

    const title = document.createElement("h1")
    title.textContent = carbLoad

    header.appendChild(title)

    content.appendChild(header)
    return header
}

function loadDescription() {
    const description = document.createElement("div")
    description.id = "description"

    // add a new <p> element for each line of the description
    for (let i = 0; i < carbLoadDesc.length; i++) {
        const descLine = document.createElement("p")
        descLine.innerHTML = carbLoadDesc[i]

        description.appendChild(descLine)
    }

    return description
}

function createMenuList(list, parentNode) {
    list.forEach(item => {
        let name = item.name
        let price = item.price

        let nameNode = document.createElement("li")
        nameNode.textContent = name
        nameNode.className = "item"

        let priceNode = document.createElement("li")
        priceNode.textContent = price
        priceNode.className = "price"

        parentNode.appendChild(nameNode)
        parentNode.appendChild(priceNode)
    })
}

function loadMenu() {
    const menu = document.createElement("div")
    menu.id = "menu"

    const sandwiches = menuItems[0]
    const pasta = menuItems[1]
    const sides = menuItems[2]

    const sandwichesTitle = document.createElement("h2")
    sandwichesTitle.textContent = "Sandwiches"
    const sandwichesList = document.createElement("ul")
    createMenuList(sandwiches, sandwichesList)

    const pastaTitle = document.createElement("h2")
    pastaTitle.textContent = "Pasta"
    const pastaList = document.createElement("ul")
    createMenuList(pasta, pastaList)

    const sidesTitle = document.createElement("h2")
    sidesTitle.textContent = "Sides"
    const sidesList = document.createElement("ul")
    createMenuList(sides, sidesList)

    menu.appendChild(sandwichesTitle)
    menu.appendChild(sandwichesList)

    menu.appendChild(pastaTitle)
    menu.appendChild(pastaList)

    menu.appendChild(sidesTitle)
    menu.appendChild(sidesList)

    return menu
}

function loadBody() {
    const body = document.createElement("div")

    body.id = "body"

    const description = loadDescription()
    const menu = loadMenu()

    content.appendChild(description)
    content.appendChild(menu)
    return body
}

function loadFooter(){
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
    content.appendChild(footer)
    return footer
}

function pageLoad() {
    loadHeader()
    loadBody()
    loadFooter()
}


export default pageLoad