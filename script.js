//Selecting "etch-tablet" id from HTML
const etchTablet = document.getElementById('etch-tablet')
//Selecting "grid-container" id from HTML
const gridContainer = document.getElementById('grid-container');
//Selecting all button element from HTML
const blackButton = document.getElementById('button-black');
const rainbowButton = document.getElementById('button-rainbow');
const shadeButton = document.getElementById('button-shade');

const clearButton = document.getElementById('button-clear');
const resizeButton = document.getElementById('button-resize');

let pixel = '';
let gridSize = 16;

const drawGrid = (screenSize) => {
  for(i = 0; i < screenSize ** 2; i++) {
    pixel = document.createElement('div'); // creates a div element
    pixel.classList.add('pixel'); //adds a class on div element
    pixel.style.backgroundColor = 'hsla(0, 0, 0, 50%)'; // add background color to element
    pixel.style.border = "1px solid #ddd" // add border size, type, and color
    gridContainer.appendChild(pixel); // puts the div as a child of gridContainer
  }
  //repeating depending on the value of screensize and having a automatic width and height
  gridContainer.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${screenSize}, auto)`

}

drawGrid(gridSize);








/*
customizeButton.addEventListener('click', () => {
  let gridSize = prompt("Enter how wide you wanna color");
  // error prompt conditionals
  while (gridSize > 100 || gridSize < 2 || isNaN(gridSize)) {
    if (isNaN(gridSize)) {
      gridSize = prompt("Enter a number only, ranges from 2-100");
    } else if (gridSize === null) {
      break;
    } else {
      gridSize = prompt("Please pick a number between 2 and 100!")
    }
  }
})
*/


/*
function makeGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  for (c = 0; c < (rows * columns); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover',
     (e) => e.target.classList.add('my-color-class'))
    container.appendChild(cell).className = "grid-item";
  };
};


makeRows(10, 10);
*/






















