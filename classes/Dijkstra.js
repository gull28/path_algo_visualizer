class Dijkstra {
  constructor(grid, startX, startY, endX, endY) {
    this.grid = grid;
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
  }

  generate() {
    const start = this.grid[this.startX][this.startY];
    const end = this.grid[this.endX][this.endY];

    const queue = new PriorityQueue();
    start.setDistance(0);
    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
      const current = queue.dequeue().value;

      if (current === end) {
        break;
      }

      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        const distance = current.distance + 1;

        if (distance < neighbor.distance) {
          neighbor.setDistance(distance);
          neighbor.setPrevious(current);
          queue.enqueue(neighbor, distance);
        }
      }
    }

    return this.getPath(end);
  }

  getNeighbors(cell) {
    const neighbors = [];
    const { x, y } = cell;

    if (x > 0) {
      neighbors.push(this.grid[x - 1][y]);
    }

    if (x < this.grid.length - 1) {
      neighbors.push(this.grid[x + 1][y]);
    }

    if (y > 0) {
      neighbors.push(this.grid[x][y - 1]);
    }

    if (y < this.grid[0].length - 1) {
      neighbors.push(this.grid[x][y + 1]);
    }

    return neighbors.filter(
      (neighbor) => neighbor.get() === "empty" && !neighbor.isVisited
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
