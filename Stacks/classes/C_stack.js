"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brackets_1 = __importDefault(require("../alias_types/brackets"));
class Stack {
    constructor() {
        this.storage = [];
    }
    push(item) {
        this.storage.push(item);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.storage.length - 1];
    }
    isEmpty() {
        if (this.storage.length)
            return false;
        else
            return true;
    }
    reverse() {
        let reversed = [];
        let staticChainLength = this.storage.length;
        for (let i = 0; i < staticChainLength; i++)
            reversed.push(this.storage.pop());
        this.storage = reversed;
    }
    expIsBalanced() {
        let detectedBrackets = [];
        for (let stackItem of this.storage) {
            for (let symbol of brackets_1.default) {
                if (stackItem === symbol.opening)
                    detectedBrackets.push(stackItem);
                else if (stackItem === symbol.closing) {
                    const lastDetectedBracket = detectedBrackets[detectedBrackets.length - 1];
                    if (lastDetectedBracket === symbol.opening)
                        detectedBrackets.pop();
                    else
                        return false;
                }
            }
        }
        if (detectedBrackets.length === 0)
            return true;
        else
            return false;
    }
}
exports.default = Stack;
//# sourceMappingURL=C_stack.js.map