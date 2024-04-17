// Were you ever arrested?

// Cells.

// Did you spend much time in the cell?

// Cells.

// Have you ever been in an instituion?

// Cells.

// Do they keep you in a cell?

// Cells.

// When you're not performing your duties do they keep you in a little box?

// Cells.

import Cell from "./Cell.js";

class DijkstraCell extends Cell {
  constructor(x, y, value = "empty") {
    this.x = x;
    this.y = y;
    this.value = value;
    this.isPath = false;
    this.isVisited = false;
    this.distance = Infinity;
    this.previous = null;
  }

  set(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  markAsVisited() {
    this.isVisited = true;
  }

  markAsPath() {
    this.isPath = true;
  }

  setDistance(distance) {
    this.distance = distance;
  }

  setPrevious(cell) {
    this.previous = cell;
  }
}

export default DijkstraCell;
