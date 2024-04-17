class Cell{
    constructor(x, y, value = "empty") {
        this.x = x;
        this.y = y;
        this.value = value;
        this.isPath = false;
        this.isVisited = false;
        this.distance = Infinity;
        this.previous = null;
    }
}

export default Cell;