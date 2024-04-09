import { PriorityQueue } from "./classes/PriorityQueue";

// priority queue demo

const pq = new PriorityQueue();

pq.enqueue("A", 3);
pq.enqueue("B", 2);
pq.enqueue("C", 1);
pq.enqueue("D", 4);
pq.enqueue("E", 5);

pq.print();

console.log(pq.dequeue()); // C
pq.print();
