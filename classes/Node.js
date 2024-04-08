// for now this is priority queue node, will make a generic node later and reformat this to inherit (!!)
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }

  toString() {
    return `${this.value} - ${this.priority}`;
  }

  getPriority() {
    return this.priority;
  }

  getValue() {
    return this.value;
  }

  setNext(node) {
    this.next = node;
  }

  getNext() {
    return this.next;
  }
}

export { Node };
