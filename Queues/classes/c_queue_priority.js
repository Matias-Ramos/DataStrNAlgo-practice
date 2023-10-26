"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PriorityQueue {
    constructor() {
        this.storage = [];
    }
    push(item) {
        if (this.isEmpty())
            this.storage[0] = item;
        else {
            this.shiftItemsToInsert(item);
        }
    }
    isEmpty() {
        return this.storage.length === 0;
    }
    shiftItemsToInsert(item) {
        for (let i = (this.storage.length - 1); i >= 0; i--) {
            if (item > this.storage[i]) {
                this.storage[i + 1] = item;
                break;
            }
            else {
                this.storage[i + 1] = this.storage[i];
                i === 0 && (this.storage[i] = item);
            }
        }
    }
}
exports.default = PriorityQueue;
