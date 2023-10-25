import PriorityQueue from "./Queues/classes/c_queue_priority";

let myQueue = new PriorityQueue<number>();
myQueue.push(100);
myQueue.push(13);
myQueue.push(12);
myQueue.push(11);
myQueue.push(9);
myQueue.push(7);
myQueue.push(5);
myQueue.push(3);
myQueue.push(1);
myQueue.push(0);
console.log(myQueue.storage);
