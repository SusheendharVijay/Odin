const container = document.querySelector(".container");

makeContainer(16, 16);
function removeEffect(event) {
  /* setTimeout(function () {
    event.target.classList.remove("onhover");
  }, 150);*/
}

function getSquares() {
  let sideLength = window.prompt("Enter the side length of new grid");
  if (sideLength) {
    removeChildren(container);
    makeContainer(sideLength);
    let boxSize = 960 / sideLength;
    container.style.gridTemplateColumns = `repeat(${sideLength},${boxSize}px)`;
    container.style.gridTemplateRows = `repeat(${sideLength},${boxSize}px)`;
  }
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function makeContainer(sideLength) {
  let totalDivs = sideLength * sideLength;

  for (let i = 0; i < totalDivs; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.addEventListener("mouseover", (event) => {
      event.target.classList.add("onhover");
    });
    newDiv.addEventListener("mouseout", removeEffect);
    container.appendChild(newDiv);
  }
}
