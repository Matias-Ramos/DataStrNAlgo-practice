import LinkedListQueue from "./Queues/classes/c_queue_linkedList";

let myLiLiQueue = new LinkedListQueue<number>();
myLiLiQueue.enqueue(10);
myLiLiQueue.enqueue(20);
myLiLiQueue.enqueue(30);
console.log(myLiLiQueue.peek());
