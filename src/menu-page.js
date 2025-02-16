import hotdog from "./pictures/hotdog.svg"
import burger from "./pictures/burger.svg"

export function createMenuPage (){
    const content = document.querySelector("#content")
    //removal of all contents children
    content.replaceChildren()
    //helper container
    const centerContainer = document.createElement("div")
    centerContainer.id = "center-container"
    content.appendChild(centerContainer)
    //menu container
    const menuContainer = document.createElement("div")
    menuContainer.id = "menu-container"
    centerContainer.appendChild(menuContainer)
    //items containers on the menu
    const hotdogContainer = document.createElement("div")
    menuContainer.appendChild(hotdogContainer)
    const burgerContainer = document.createElement("div")
    menuContainer.appendChild(burgerContainer)
    //hotdog image
    const hotdogImage = document.createElement("img")
    hotdogImage.src = hotdog
    hotdogContainer.appendChild(hotdogImage)
    //hotdog paragraph
    const hotdogText = document.createElement("p")
    hotdogText.textContent = "Our handmade hotdog with freshly made ketchup"
    hotdogContainer.appendChild(hotdogText)
    //burger image
    const burgerImage = document.createElement("img")
    burgerImage.src = burger
    burgerContainer.appendChild(burgerImage)
    //burger paragraph
    const burgerText = document.createElement("p")
    burgerText.textContent = "Our delicious burger with sweet onion sauce and bacon. Serve with our fresh made steak fries deep fried in lard"
    burgerContainer.appendChild(burgerText)
}