"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const c_queue_linkedList_1 = __importDefault(require("./Queues/classes/c_queue_linkedList"));
let myLiLiQueue = new c_queue_linkedList_1.default();
myLiLiQueue.enqueue(10);
myLiLiQueue.enqueue(20);
myLiLiQueue.enqueue(30);
console.log(myLiLiQueue.peek());
