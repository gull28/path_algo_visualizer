import Cell from "./Cell.js";
// might have to make a cell class to store metadata about each cell (isPath, isVisited, etc)
class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    // nasty hack
    this.cells = [];

    for (let i = 0; i < width; i++) {
      this.cells[i] = [];

      for (let j = 0; j < height; j++) {
        this.cells[i][j] = new Cell(i, j, "empty");
      }
    }
  }

  get() {
    return this.cells;
  }

  set(x, y, value = "empty") {
    this.cells[x + y * this.width] = value;
  }

  removeCell(x, y) {}
}

export default Grid;
