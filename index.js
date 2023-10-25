"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const c_queue_priority_1 = __importDefault(require("./Queues/classes/c_queue_priority"));
let myQueue = new c_queue_priority_1.default();
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
//# sourceMappingURL=index.js.map