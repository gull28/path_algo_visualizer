import { Node } from "./Node.js"; // :D

class PriorityQueue {
  constructor() {
    this.values = [];
    this.length = 0;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
    this.length++;
  }
}
