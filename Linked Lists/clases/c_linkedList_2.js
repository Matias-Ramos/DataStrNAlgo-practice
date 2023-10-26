"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node2_1 = __importDefault(require("./Node2"));
class LinkedList2 {
    /******************************** */
    addNode(value) {
        let newNode = new Node2_1.default(value);
        if (this.IsEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }
    /******************************** */
    removeFirst() {
        if (this.IsEmpty())
            throw new Error("Cannot remove a node on an empty Linked List.");
        let removed;
        if (this.head === this.tail)
            removed = this.removeOnSingleNode();
        else
            removed = this.removeOnMultiNode();
        return removed;
    }
    removeOnSingleNode() {
        const oldHead = this.head;
        this.head = undefined;
        this.tail = undefined;
        return oldHead;
    }
    removeOnMultiNode() {
        const oldHead = this.head;
        this.head = this.head.nextNode;
        return oldHead;
    }
    /******************************** */
    printHeadTail() {
        return [this.head, this.tail];
    }
    getHead() {
        return this.head;
    }
    IsEmpty() {
        return (!this.head && !this.tail);
    }
    size() {
        if (this.IsEmpty())
            return 0;
        let current = this.head;
        let counter = 0;
        while (current != null) {
            counter++;
            current = current.nextNode;
        }
        return counter;
    }
}
exports.default = LinkedList2;
