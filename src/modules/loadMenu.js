import * as CONSTANTS from './restInfo'

const menuItems = CONSTANTS.default.menuItems

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

    const xButton = document.createElement("div")
    xButton.textContent = "X"
    xButton.id = "closeMenu"
    xButton.className = "xButton"

    menu.appendChild(xButton)

    menu.appendChild(sandwichesTitle)
    menu.appendChild(sandwichesList)

    menu.appendChild(pastaTitle)
    menu.appendChild(pastaList)

    menu.appendChild(sidesTitle)
    menu.appendChild(sidesList)

    return menu
}

export { loadMenu }