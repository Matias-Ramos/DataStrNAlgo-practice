"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = exports.SharedStack = void 0;
const brackets_1 = __importDefault(require("../alias_types/brackets"));
class SharedStackBackBone {
    constructor() {
        this.index = 0;
        this.storage = [];
    }
}
class SharedStack extends SharedStackBackBone {
    constructor() {
        super();
        this._stackId = SharedStack.lastStackId;
        SharedStack.lastStackId++;
    }
    push(newValue) {
        const new_node = {
            value: newValue,
            stack: this._stackId
        };
        this.storage[this.index] = new_node;
        this.index++;
    }
    pop() {
        if (this.storage.length === 0)
            throw new Error("Storage is empty");
        else {
            let removed = undefined;
            const len = this.storage.length - 1;
            let i;
            for (i = len; i >= 0; i--) {
                const currentNode = this.storage[i];
                if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.stack) === this._stackId) {
                    removed = currentNode;
                    this.storage[i] = undefined;
                    break;
                }
            }
            // fill blank space
            if (removed) {
                for (let j = i; j < len; j++) {
                    this.storage[i] = this.storage[i + 1];
                }
            }
            return removed;
        }
    }
    isEmpty() {
        return this.storage.length > 0;
    }
}
exports.SharedStack = SharedStack;
SharedStack.lastStackId = 0;
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
exports.Stack = Stack;
