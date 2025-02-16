export function createAboutPage() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  //about page container
  const aboutContainer = document.createElement("div");
  aboutContainer.id = "about-container";
  content.appendChild(aboutContainer);
  //heading
  const aboutHeading = document.createElement("h1");
  aboutHeading.textContent = "About us";
  aboutContainer.appendChild(aboutHeading);
  //info
  const aboutInfo = document.createElement("p");
  aboutInfo.textContent =
    "Welcome to Grill & Bun, where we do one thing and do it right—serving up the juiciest burgers and tastiest hot dogs in town. Whether you’re craving a classic cheeseburger, a fully loaded hot dog, or something with a twist, we’ve got you covered. Fresh ingredients, flame-grilled perfection, and bold flavors—that’s what we’re all about. Grab a bite, kick back, and enjoy the simple, satisfying taste of great American comfort food!";
    aboutContainer.appendChild(aboutInfo)
}
