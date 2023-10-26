"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node2_1 = __importDefault(require("./Node2"));
class LinkedList2 {
    addFirst(value) {
        let newNode = new Node2_1.default(value);
        if (this.linkedListIsEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }
    linkedListIsEmpty() {
        return (!this.head && !this.tail);
    }
    printHeadTail() {
        return [this.head, this.tail];
    }
    removeFirst() {
        if (this.linkedListIsEmpty())
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
}
exports.default = LinkedList2;
