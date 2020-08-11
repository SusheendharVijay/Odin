const div = document.querySelector("#container");
const pElement = document.createElement("p");
pElement.textContent = "This is new bitch fuck you html";
pElement.style.color = "red";
pElement.classList.add("content");
div.appendChild(pElement);

const heading = document.createElement("h3");

heading.textContent = "I am a heading damnnnnnnnn";
heading.setAttribute("style", "color:blue");

div.appendChild(heading);

const newDiv = document.createElement("div");

newDiv.classList.add("boxy");
const bigHeading = document.createElement("h1");
bigHeading.textContent = "I am inside a div lol";

const p2 = document.createElement("p");

p2.textContent = "ME TOO!";
newDiv.appendChild(p2);
newDiv.appendChild(bigHeading);

div.appendChild(newDiv);

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  console.log(e);
  e.target.style.backgroundColor = "blue";
});
