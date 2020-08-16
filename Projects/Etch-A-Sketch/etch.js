const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.addEventListener("mouseover", (event) => {
    event.target.classList.add("onhover");
  });
  newDiv.addEventListener("mouseout", removeEffect);
  container.appendChild(newDiv);
}

function removeEffect(event) {
  setTimeout(function () {
    event.target.classList.remove("onhover");
  }, 150);
}
