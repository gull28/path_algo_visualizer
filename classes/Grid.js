// might have to make a cell class to store metadata about each cell (isPath, isVisited, etc)
class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = new Array(width * height);

    // Initialize all cells as empty

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i] = "empty";
    }
  }

  get(x, y) {
    return this.cells[x + y * this.width];
  }

  /**
   *
   * @param {*} x x-coordinate
   * @param {*} y y-coordinate
   * @param {*} value value from set: ["obstacle", "start", "end", "empty"]
   */
  set(x, y, value = "empty") {
    this.cells[x + y * this.width] = value;
  }
}
