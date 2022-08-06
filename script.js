const container = document.getElementById("container");
const customizeButton = document.getElementById("customize-button");


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



function makeRows(rows, columns) {
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























