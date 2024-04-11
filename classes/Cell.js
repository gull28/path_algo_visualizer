class Cell {
  constructor(x, y, value = "empty") {
    this.x = x;
    this.y = y;
    this.value = value;
  }

  set(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }
}

export default Cell;
