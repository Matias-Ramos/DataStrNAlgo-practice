"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const c_stack_2queues_1 = __importDefault(require("./Stacks/classes/c_stack_2queues"));
const myStack = new c_stack_2queues_1.default();
console.log(myStack.isEmpty()); // true
console.log(myStack.peek()); // undefined
myStack.push(10);
myStack.push(20);
myStack.push(30);
const removed = myStack.pop();
console.log(removed); // 30
console.log(myStack.isEmpty()); // false
console.log(myStack.size()); // 2
