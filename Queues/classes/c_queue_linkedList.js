"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const c_linkedList_2_1 = __importDefault(require("../../Linked Lists/clases/c_linkedList_2"));
class LinkedListQueue {
    constructor() {
        this.storage = [];
        this.linkedList = new c_linkedList_2_1.default();
    }
    enqueue(value) {
        this.linkedList.addNode(value);
    }
    dequeue() {
        if (this.linkedList.IsEmpty())
            throw new Error("Cannot dequeue an empty queue.");
        const removed = this.linkedList.removeFirst();
        return removed;
    }
    peek() {
        return this.linkedList.getHead();
    }
    size() {
        return this.linkedList.size();
    }
    isEmpty() {
        return this.linkedList.IsEmpty();
    }
}
exports.default = LinkedListQueue;
