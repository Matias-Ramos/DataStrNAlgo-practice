import Queue from "./Queues/classes/c_queue_arr";

const queue = new Queue<string>();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
console.log(queue.isEmpty());


