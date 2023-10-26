"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this._storage = [];
        this._front = 0;
        this._rear = 0;
        // reverse(): void{
        //   let auxArr: T [] = [...this.storage];
        //   const len = this.storage.length - 1 ;
        //   for( let i = len; i >= 0; i--){
        //     const dequeued = this.dequeue()
        //     auxArr[i] = dequeued
        //   }
        //   this.storage = auxArr;
        // }
    }
    get storage() {
        let auxArr = [];
        for (let i = this._front; i < this._rear; i++) {
            auxArr.push(this._storage[i]);
        }
        return auxArr;
    }
    enqueue(item) {
        this._storage[this._rear] = item;
        this._rear++;
    }
    dequeue() {
        if (!this._storage[this._front])
            throw new Error("Cannot dequeue an empty queue.");
        const firstItem = this._storage[this._front++];
        this._front === this._rear && this._rear++;
        return firstItem;
    }
    peek() {
        if (!this._storage.length || !this._storage[this._front])
            throw new Error("Cannot dequeue on empty queue.");
        return this._storage[this._rear - 1];
    }
    size() {
        return this._storage.length;
    }
    isEmpty() {
        const hasFront = this._storage[this._front] ? true : false;
        const hasRear = this._storage[this._rear] ? true : false;
        return (!hasFront && !hasRear);
    }
}
exports.default = Queue;
