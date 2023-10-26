"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueueOfStacks {
    constructor() {
        this._s1 = [];
        this._s2 = [];
    }
    push(data) {
        let s1Length = this._s1.length - 1;
        let s2Length = this._s1.length - 1;
        // s1 -> s2
        for (let i = 0; i <= s1Length; i++) {
            if (this._s1.length) {
                const popped = this._s1.pop();
                this._s2.push(popped);
            }
        }
        // x -> s1
        this._s1.push(data);
        // s2 -> s1
        for (let i = 0; i <= s2Length; i++) {
            if (this._s2.length) {
                const popped = this._s2.pop();
                this._s1.push(popped);
            }
        }
    }
    pop() {
        const aux = this._s1[this._s1.length - 1];
        this._s1.pop();
        return aux;
    }
    peek() {
        if (!this._s1.length)
            throw new Error("Cannot peek on empty queue.");
        return this._s1[this._s1.length - 1];
    }
}
exports.default = QueueOfStacks;
