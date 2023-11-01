"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node3_1 = __importDefault(require("./Node3"));
class LinkedList3 {
    /******************************** */
    addNode(k, v) {
        let newNode = new Node3_1.default({ key: k, value: v });
        if (this.IsEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            const isNewKey = this.replaceValueifKeyExists(k, v);
            isNewKey && this.replaceTail(newNode);
        }
    }
    replaceValueifKeyExists(k, v) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.pair.key === k) {
                currentNode.pair.value = v;
                break;
            }
            currentNode = currentNode.nextNode;
        }
        return (currentNode === undefined);
    }
    getValue(k) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.pair.key === k)
                return currentNode.pair.value;
            currentNode = currentNode.nextNode;
        }
        return undefined;
    }
    deleteNode(k) {
        let currentNode = this.head;
        let previousNode;
        while (currentNode !== undefined) {
            if (currentNode.pair.key === k) {
                // is head && >2 nodes
                if (currentNode === this.head && currentNode.nextNode !== undefined) {
                    const secondNode = currentNode.nextNode;
                    currentNode.nextNode = undefined;
                    currentNode = undefined;
                    this.head = secondNode;
                }
                // is tail && >2 nodes
                else if (currentNode === this.tail && previousNode) {
                    previousNode.nextNode = undefined;
                    currentNode = undefined;
                }
                // single Node
                else {
                    this.head = undefined;
                    this.tail = undefined;
                }
            }
            previousNode = currentNode;
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode;
        }
    }
    replaceTail(newNode) {
        this.tail.nextNode = newNode;
        this.tail = newNode;
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
exports.default = LinkedList3;
