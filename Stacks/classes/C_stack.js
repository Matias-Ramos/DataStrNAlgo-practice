"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedStack1 = void 0;
const brackets_1 = __importDefault(require("../alias_types/brackets"));
class SharedStackBackBone {
    constructor() {
        this.index = 0;
        this.storage = [];
    }
}
class SharedStack1 extends SharedStackBackBone {
    push1(n) {
        const new_node = {
            value: n,
            stack: 1
        };
        this.storage[this.index] = new_node;
        this.index++;
    }
    pop1() {
        if (this.storage.length === 0)
            throw new Error("Storage is empty");
        let removed = undefined;
        const len = this.storage.length - 1;
        for (let i = len; i >= 0; i--) {
            if (this.storage[i].stack === 1) {
                removed = this.storage[i].value;
                this.storage[i].stack = undefined;
                // this.storage[i].value = undefined;
                break;
            }
        }
        return removed;
    }
    isEmpty1() {
        return this.storage.length > 0;
    }
}
exports.SharedStack1 = SharedStack1;
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