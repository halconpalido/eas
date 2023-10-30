let size = 16;

const gridSizeButton = document.querySelector("#gridsize");
gridSizeButton.addEventListener("click", () => changeGridSize());

function createGrid(gridSize) {
  const grid = document.getElementById("grid");
  grid.innerHTML = ""; // Clear the existing grid

  const tileDimension = 960 / gridSize - 2; // Subtracting 2px for border
  grid.style.setProperty('--tile-dimension', `${tileDimension}px`);
  
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const gridelement = document.createElement("div");
    gridelement.classList.add("tile");
    gridelement.addEventListener("mouseover", function() {
      this.style.backgroundColor = "black";
    });
    grid.appendChild(gridelement);
  }
}

function changeGridSize() {
    let isValid = false;
    while (!isValid) {
      const input = prompt("What size grid do you want? (1-64)", "");
      if (input !== null && !isNaN(input) && input >= 1 && input <= 64) {
        size = Number(input);
        isValid = true;
      } else {
        alert("Please enter a valid number between 1 and 64.");
      }
    }
    createGrid(size);
  }
