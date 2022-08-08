//Selecting "etch-tablet" id from HTML
const etchTablet = document.getElementById('etch-tablet')
//Selecting "grid-container" id from HTML
const gridContainer = document.getElementById('grid-container');
//Selecting all button element from HTML
const colorButtons = document.querySelectorAll('.color-choice');

const clearButton = document.getElementById('button-clear');
const resizeButton = document.getElementById('button-resize');

var color = 'black';



function drawGrid(gridNumber) {
  let gridArea = gridNumber * gridNumber;
  for (let i = 1; i <= gridArea; i++) {
    let gridPixel = document.createElement('div');
    gridPixel.classList.add('grid-pixel');


    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    gridContainer.insertAdjacentElement('beforeend', gridPixel);
  }

  var gridPixels = gridContainer.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}


function colorGrid() {
  switch (color) {

    case 'rainbow':
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      this.classList.remove('gray');
      break;
    
    case 'gray':
      if (this.style.backgroundColor.match(/rgba/)) {
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
        if (currentOpacity <= 0.9) {
            this.style.backgroundColor = `rgba(128, 128, 128, ${currentOpacity + 0.1})`;
            this.classList.add('gray');
        }
      } else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(128, 128, 128)') {
         return;
      } else {
         this.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';  
      }
      break;

    case 'eraser':
      this.style.backgroundColor = 'hsla(0, 0%, 0%, 0%)';
      this.classList.remove('gray');
      break;

    case 'black':
      this.style.backgroundColor = '#000000';
      this.classList.remove('gray');
      break;

    default:
      this.style.backgroundColor = color;
      this.classList.remove('gray');
      break;
  }
}


// Clear Button
function eraseAllColor() {
  var gridPixels = gridContainer.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = 'hsla(0, 0%, 0%, 0%)');
}



// Updates color variable when a color button is clicked
function changeColor(event) {
  switch (event.target.dataset.color) { 
      case 'rainbow':
          color = 'rainbow';
          break;  
      case 'gray':
          color = 'gray';
          break;
      case 'eraser':
          color = 'eraser';
          break;
      default:
          color = 'black';
          break;
  } 
}



function resize () {
  let gridNumber = prompt("Enter how wide you wanna color");
  // error prompt conditionals
  while (gridNumber > 100 || gridNumber < 2 || isNaN(gridNumber)) {
    if (isNaN(gridNumber)) {
      gridNumber = prompt("Enter a number only, ranges from 2-100");
    } else if (gridNumber === null) {
      break;
    } else {
      gridNumber = prompt("Please pick a number between 2 and 100!", 16)
    }
  }
  eraseAllColor();
  drawGrid(gridNumber);
}




clearButton.addEventListener('click', eraseAllColor);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));
resizeButton.addEventListener('click', resize);


//default grid

drawGrid(10);
