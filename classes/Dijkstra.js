import PriorityQueue from "./PriorityQueue.js";

class Dijkstra {
  constructor(grid, startX, startY, endX, endY) {
    this.grid = grid;
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.initializeGrid();
  }

  initializeGrid() {
    for (let x = 0; x < this.grid.length; x++) {
      for (let y = 0; y < this.grid[0].length; y++) {
        this.grid[x][y].distance = Infinity;
        this.grid[x][y].isVisited = false;
        this.grid[x][y].previous = null;
      }
    }
    this.grid[this.startX][this.startY].distance = 0;
  }

  generate() {
    const start = this.grid[this.startX][this.startY];
    const end = this.grid[this.endX][this.endY];

    const queue = new PriorityQueue((a, b) => a.distance - b.distance);
    queue.enqueue(start, start.distance);

    while (!queue.isEmpty()) {
      const current = queue.dequeue().value;
      current.isVisited = true;

      if (current === end) {
        break;
      }

      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        const distance = current.distance + 1;

        if (distance < neighbor.distance) {
          neighbor.distance = distance;
          neighbor.previous = current;
          queue.enqueue(neighbor, neighbor.distance);
        }
      }
    }

    return this.getPath(end);
  }

  getNeighbors(cell) {
    const neighbors = [];
    const { x, y } = cell;

    if (x > 0) neighbors.push(this.grid[x - 1][y]);
    if (x < this.grid.length - 1) neighbors.push(this.grid[x + 1][y]);
    if (y > 0) neighbors.push(this.grid[x][y - 1]);
    if (y < this.grid[0].length - 1) neighbors.push(this.grid[x][y + 1]);

    return neighbors.filter(
      (neighbor) => !neighbor.isVisited && neighbor.get() !== "wall"
    );
  }

  getPath(end) {
    const path = [];
    let current = end;

    while (current) {
      path.unshift(current);
      current = current.previous;
    }

    return path;
  }
}

export default Dijkstra;
