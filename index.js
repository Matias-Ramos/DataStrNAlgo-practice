"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const c_queue_arr_1 = __importDefault(require("./Queues/classes/c_queue_arr"));
const queue = new c_queue_arr_1.default();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());
//# sourceMappingURL=index.js.map