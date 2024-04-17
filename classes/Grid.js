import Cell from "./DijkstraCell.js";
// might have to make a cell class to store metadata about each cell (isPath, isVisited, etc)
class Grid {
  constructor(width, height) {
    if (Grid.instance) {
      return Grid.instance;
    }

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

    Grid.instance = this;
  }

  static getInstance() {
    if (!Grid.instance) {
      Grid.instance = new Grid(0, 0);
    }
    return Grid.instance;
  }

  static resetInstance() {
    Grid.instance = null;
  }

  static setInstance(width, height) {
    Grid.instance = new Grid(width, height);
  }

  get() {
    return this.cells;
  }

  set(x, y, value = "empty") {
    this.cells[x + y * this.width] = value;
  }

  validateNewCell(x, y, type) {
    x = parseInt(x);
    y = parseInt(y);

    if (x < 0 || x > this.width || y < 0 || y > this.height) {
        console.log(x, y, this.width, this.height);
        console.log("out of bounds");
        return false;
    }

    if (this.cells[x][y].get() === type) {
        return false;
    }

    if (type === "start" || type === "end") {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if (this.cells[i][j].get() === type) {
                    return false;
                }
            }
        }
    }

    return true;
}

  getStartNode() {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (this.cells[i][j].get() === "start") {
          return this.cells[i][j];
        }
      }
    }
    return null;
  }

  getEndNode() {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (this.cells[i][j].get() === "end") {
          return this.cells[i][j];
        }
      }
    }
    return null;
  }

  getTypeCells(type) {
    let cells = [];
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (this.cells[i][j].get() === type) {
          cells.push(this.cells[i][j]);
        }
      }
    }

    return cells;
  }

  removeCell(x, y) {}
}

export default Grid;
