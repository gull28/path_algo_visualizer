import Dijkstra from "./Dijkstra.js";

// think of a way to make this work with the grid
// this is by no means efficient, but taking walls into account, this is the best way to do it as of now
class AdjacencyMatrix {
  constructor(grid) {
    this.grid = grid;
    this.matrix = [];
  }

  generateMatrix(checkpoints) {
    for (let i = 0; i < checkpoints.length; i++) {
      this.addVertex();
    }

    for (let i = 0; i < checkpoints.length; i++) {
      for (let j = 0; j < checkpoints.length; j++) {
        if (i !== j) {
          const distance = new Dijkstra(
            this.grid,
            checkpoints[i].x,
            checkpoints[i].y,
            checkpoints[j].x,
            checkpoints[j].y
          ).getDistance();
          this.addEdge(i, j, distance);
        }
      }
    }
  }

  addVertex() {
    this.matrix.push([]);
    for (let i = 0; i < this.matrix.length; i++) {
      this.matrix[i].push(0);
    }
  }

  addEdge(from, to, weight) {
    this.matrix[from][to] = weight;
  }

  removeEdge(from, to) {
    this.matrix[from][to] = 0;
  }

  getEdge(from, to) {
    return this.matrix[from][to];
  }

  getMatrix() {
    return this.matrix;
  }
}
