class Cell {
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

export default Cell;
