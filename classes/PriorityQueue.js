import { Node } from "./Node.js"; // :D

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.length = 0;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.heap.push(newNode);
    this.bubbleUp();
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.heap[0];
    this.heap[0] = this.heap[this.length - 1];
    this.heap.pop();
    this.length -= 1;
    this.sinkDown(0);

    return root;
  }

  // find the correct position for the newly added node
  bubbleUp() {
    // get the node that was just added
    let index = this.length - 1;
    const node = this.heap[index];

    /* while the node has a parent and the node's priority is less than its parent's priority
    swap the node with its parent */
    while (index > 0) {
      // formula to find the parent of a node in binary heap (not necessary to understand)
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (node.priority >= parent.priority) break;

      this.heap[parentIndex] = node;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  // move the node down the heap to find the correct position
  sinkDown(index) {
    while (2 * index + 1 < this.length) {
      let childIndex = 2 * index + 1;
      if (
        childIndex + 1 < this.length &&
        this.heap[childIndex + 1].priority < this.heap[childIndex].priority
      ) {
        childIndex += 1;
      }

      // If the current element's priority is already less than or equal to the lowest priority child,
      // we have found the correct position for the current element
      if (this.heap[index].priority <= this.heap[childIndex].priority) {
        break;
      }
      // Rearrange the current element and the child element
      [this.heap[index], this.heap[childIndex]] = [
        this.heap[childIndex],
        this.heap[index],
      ];
      index = childIndex;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    console.log(this.heap);
  }
}

export default PriorityQueue;
