"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReverserQueue {
    constructor(storage, k) {
        this.storage = storage;
        this.k = k;
        this.reverse();
    }
    reverse() {
        let dequeues = this.dequeueGroup();
        this.enqueueStackOf(dequeues);
    }
    dequeueGroup() {
        let auxArr = [];
        for (let i = 0; i <= (this.k - 1); i++) {
            auxArr.push(this.storage[i]);
        }
        return auxArr;
    }
    enqueueStackOf(arr) {
        let counter = 0;
        for (let i = (this.k - 1); i >= 0; i--) {
            this.storage[counter++] = arr[i];
        }
    }
}
exports.default = ReverserQueue;
