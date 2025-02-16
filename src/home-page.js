import hotDog from "./pictures/hotdogImageHomePage.png";
import burger from "./pictures/burger-float.png"

export function createInitialPage() {
  const content = document.querySelector("#content");
  content.replaceChildren()
  //heading
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to our Lovely Restaurant";
  content.appendChild(heading);
  //main info part
  const mainInfo = document.createElement("div");
  mainInfo.id = "main-info";
  content.appendChild(mainInfo);
  //text
  const mainInfotextOne = document.createElement("h2");
  mainInfotextOne.textContent =
    "Experience delicious flavors, fresh ingredients, and a cozy atmosphere. From mouthwatering appetizers to signature dishes, every bite is made with love.";
  mainInfo.appendChild(mainInfotextOne);
  //image
  const hotDogImage = document.createElement("img");
  hotDogImage.src = hotDog;
  mainInfo.appendChild(hotDogImage);
  //image
  const burgerImage = document.createElement("img");
  burgerImage.src = burger;
  mainInfo.appendChild(burgerImage);
  //text
  const mainInfotextTwo = document.createElement("h2");
  mainInfotextTwo.textContent =
    "📍 Visit us today or order online 🍔🥗🍕 #GoodFood #GreatVibes";
  mainInfo.appendChild(mainInfotextTwo);
}
