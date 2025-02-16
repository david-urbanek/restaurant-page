import "./styles.css";
import { createInitialPage } from "./home-page";
import { createMenuPage } from "./menu-page"
createInitialPage()

const menuButton = document.querySelector("#menu")
menuButton.addEventListener("click", createMenuPage)

const homeButton = document.querySelector("#home")
homeButton.addEventListener("click", createInitialPage)
