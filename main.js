import PriorityQueue from "./classes/PriorityQueue.js";
import Grid from "./classes/Grid.js";
// priority queue demo

const pq = new PriorityQueue();

pq.enqueue("A", 3);
pq.enqueue("B", 2);
pq.enqueue("C", 1);
pq.enqueue("D", 4);
pq.enqueue("E", 5);

function generateGrid() {
  const gridDiv = document.getElementById("grid");

  while (gridDiv.firstChild) {
    gridDiv.removeChild(gridDiv.firstChild);
  }

  const gridColumns = document.getElementById("col_count").value;
  const gridRows = document.getElementById("row_count").value;

  const grid = new Grid(gridColumns, gridRows);
  console.log(grid.get());

  gridDiv.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
  gridDiv.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;

  for (let i = 0; i < gridColumns; i++) {
    for (let j = 0; j < gridRows; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = `${i}, ${j}`;
      gridDiv.appendChild(cell);
    }
  }
}

// to do - update cell value in grid
function updateCell() {}

export { generateGrid, updateCell };
