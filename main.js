import PriorityQueue from "./classes/PriorityQueue.js";
import Grid from "./classes/Grid.js";
import Dijkstra from "./classes/Dijkstra.js";

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

  document.getElementById("painter-form").style.display = "flex";

  // get total cell count
  const totalCells = gridColumns * gridRows;

  for (let i = 0; i < gridColumns; i++) {
    for (let j = 0; j < gridRows; j++) {
      const cell = document.createElement("div");
      cell.classList.add(`cell`);
      const cellType = grid.get()[i][j].get();
      cell.classList.add(cellType);

      if (grid.get()[i][j].isPath) {
        cell.classList.add("isPath");
      }

      // append data
      cell.setAttribute("data-x", `${i}`);
      cell.setAttribute("data-y", `${j}`);

      // set rem based on total cells
      gridDiv.appendChild(cell);
    }
  }
}

function setCell(x, y, cellType) {
  const grid = Grid.getInstance();
  const cell = grid.get()[x][y];
  cell.set(cellType);

  const gridDiv = document.getElementById("grid");
  const cellDiv = gridDiv.querySelector(`[data-x="${x}"][data-y="${y}"]`);

  cellDiv.classList.add(cellType);
}

function generateDijkstra() {
  const grid = Grid.getInstance();
  const start = grid.getStartNode();
  const end = grid.getEndNode();

  const startX = start.x;
  const startY = start.y;
  const endX = end.x;
  const endY = end.y;

  const dijkstra = new Dijkstra(grid.get(), startX, startY, endX, endY);
  const path = dijkstra.generate();

  for (let i = 0; i < path.length; i++) {
    const cell = path[i];
    delay(cell, i * 250, "isPath");
  }
}

function delay(cell, delayTime, cellType) {
  setTimeout(() => {
    setCell(cell.x, cell.y, cellType);
  }, delayTime);
}

function handleCellClick(e, painterMode, cellType) {
  const cell = e.target;

  if (cell.tagName === "DIV") {
    const grid = Grid.getInstance();

    const x = cell.getAttribute("data-x");
    const y = cell.getAttribute("data-y");

    console.log(x, y);
    if (painterMode) {
      const gridSingleton = Grid.getInstance();

      console.log(gridSingleton.validateNewCell(x, y, cellType));
      if (gridSingleton.validateNewCell(x, y, cellType)) {
        const cell = gridSingleton.get()[x][y];
        console.log(cellType, cell);
        cell.set(cellType);
      }

      // check if start and end nodes are set, if they are, enable dijkstra button
      const startNode = gridSingleton.getStartNode();
      const endNode = gridSingleton.getEndNode();

      if (startNode && endNode) {
        document.getElementById("generate_dijkstra").style.display = "block";
        document.getElementById("generate_dijkstra").disabled = false;
      }

      generateGrid();
      return;
    }

    // change display of cell data to block and show x and y
    document.getElementById("cell-data").style.display = "block";
    // set select value for cell type
    const cellTypeSelect = document.getElementById("cell-type");

    const wantedCell = grid.get()[x][y].get();

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

  // check if start and end nodes are set, if they are, enable dijkstra button
  const startNode = gridSingleton.getStartNode();
  const endNode = gridSingleton.getEndNode();

  if (startNode && endNode) {
    document.getElementById("generate_dijkstra").style.display = "block";
    document.getElementById("generate_dijkstra").disabled = false;
  }

  if (gridSingleton.validateNewCell(x, y, cellType)) {
    const cell = gridSingleton.get()[x][y];
    cell.set(cellType);
    generateGrid();

    return;
  }

  alert("Invalid cell type or cell already exists");
}

export { generateGrid, updateCell, handleCellClick, generateDijkstra };
