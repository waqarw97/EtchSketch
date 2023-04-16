const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

function changeColor(event) {
  event.target.style.backgroundColor = 'black';
}

function createGrid(squaresPerSide) {
  const squareSize = 400 / squaresPerSide;
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover", changeColor);
    container.appendChild(square);
  }
}

function resetGrid() {
  const newSize = parseInt(prompt("Enter the number of squares per side (max 100):", "16"), 10);
  if (newSize && newSize <= 100) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createGrid(newSize);
  } else {
    alert("Invalid input. Please enter a number between 1 and 100.");
  }
}

resetButton.addEventListener("click", resetGrid);

createGrid(16);

