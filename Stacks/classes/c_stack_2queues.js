"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StackOfTwoQueues {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }
    push(newItem) {
        // q1 -> q2
        for (let element of this.q1) {
            this.q2.push(element);
        }
        // v -> q1
        this.q1 = [];
        this.q1.push(newItem);
        // q2 -> q1
        for (let element of this.q2) {
            this.q1.push(element);
        }
        this.q2 = [];
    }
    pop() {
        if (this.isEmpty())
            throw new Error("Cannot pop on an empty stack (of two queues).");
        const removed = this.q1.shift();
        return removed;
    }
    peek() {
        return this.q1[0];
    }
    size() {
        return this.q1.length;
    }
    isEmpty() {
        return this.q1.length === 0;
    }
}
exports.default = StackOfTwoQueues;
