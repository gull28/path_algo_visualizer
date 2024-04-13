class Dijkstra {
  constructor(graph) {
    this.graph = graph;
  }

  findShortestPath(startNode, endNode) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    let neighbor;
    let alt;

    for (let vertex in this.graph) {
      if (vertex === startNode) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(Infinity, vertex);
      }

      previous[vertex] = null;
    }

    while (!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if (smallest === endNode) {
        path = [];

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (!smallest || distances[smallest] === Infinity) {
        continue;
      }

      for (neighbor in this.graph[smallest]) {
        alt = distances[smallest] + this.graph[smallest][neighbor];

        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;
          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  }
}
