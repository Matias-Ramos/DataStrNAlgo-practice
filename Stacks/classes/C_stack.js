"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.storage = [];
    }
    push(item) {
        this.storage.push(item);
    }
    ;
    pop() {
        return this.storage.pop();
    }
    ;
    peek() {
        return this.storage[this.storage.length];
    }
    ;
    isEmpty() {
        if (this.storage.length)
            return false;
        else
            return true;
    }
    ;
    reverse() {
        if (this.isEmpty() || this.storage.length === 1)
            throw new Error("There are not enough values in the stack to execute this function");
        let iOfReplaced = 0;
        let arrayPositions = this.storage.length - 1;
        for (let j = 0; j < arrayPositions; j++) {
            let poppedItem = this.storage.pop();
            for (let i = arrayPositions; i >= 0; i--) {
                if (i == iOfReplaced) {
                    this.storage[i] = poppedItem;
                    iOfReplaced++;
                }
                else if (i > iOfReplaced) {
                    let previousValue = this.storage[i - 1];
                    this.storage[i] = previousValue;
                }
                else
                    continue;
            }
        }
    }
    reverse2() {
        let reversed = [];
        let staticStlength = this.storage.length;
        for (let i = 0; i < staticStlength; i++) {
            reversed.push(this.storage.pop());
        }
        this.storage = reversed;
    }
}
exports.default = Stack;
//# sourceMappingURL=C_stack.js.map