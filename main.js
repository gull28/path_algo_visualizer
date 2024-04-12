import PriorityQueue from "./classes/PriorityQueue.js";
import Grid from "./classes/Grid.js";

function generateGrid() {
  const gridDiv = document.getElementById("grid");

  while (gridDiv.firstChild) {
    gridDiv.removeChild(gridDiv.firstChild);
  }

  const gridColumns = document.getElementById("col_count").value;
  const gridRows = document.getElementById("row_count").value;

  const grid = new Grid(gridColumns, gridRows);

  gridDiv.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
  gridDiv.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;

  for (let i = 0; i < gridColumns; i++) {
    for (let j = 0; j < gridRows; j++) {
      const cell = document.createElement("div");
      cell.classList.add(`cell`);
      const cellType = grid.get()[i][j].get();
      cell.classList.add(cellType);

      // append data
      cell.setAttribute("data-x", `${i}`);
      cell.setAttribute("data-y", `${j}`);

      cell.textContent = `${i}, ${j}`;
      gridDiv.appendChild(cell);
    }
  }
}

function handleCellClick(e) {
  const cell = e.target;

  if (cell.tagName === "DIV") {
    const cellType = Grid.getInstance();

    const x = cell.getAttribute("data-x");
    const y = cell.getAttribute("data-y");

    // change display of cell data to block and show x and y
    document.getElementById("cell-data").style.display = "block";
    // set select value for cell type
    const cellTypeSelect = document.getElementById("cell-type");

    const wantedCell = cellType.get()[x][y].get();

    cellTypeSelect.value = wantedCell;

    const cellCoords = document.getElementById("cell-coordinates");
    cellCoords.innerHTML = `x: ${x}, y: ${y}`;
    cellCoords.setAttribute("data-x", x);
    cellCoords.setAttribute("data-y", y);
  }
}

// to do - update cell value in grid
function updateCell() {
  const cellType = document.getElementById("cell-type").value;
  const cellCoords = document.getElementById("cell-coordinates");
  const x = cellCoords.getAttribute("data-x");
  const y = cellCoords.getAttribute("data-y");

  const gridSingleton = Grid.getInstance();

  if (gridSingleton.validateNewCell(x, y, cellType)) {
    const cell = gridSingleton.get()[x][y];
    cell.set(cellType);
    generateGrid();

    return;
  }

  alert("Invalid cell type or cell already exists");
}

export { generateGrid, updateCell, handleCellClick };
