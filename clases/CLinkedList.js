"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nodee_1 = __importDefault(require("./Nodee"));
class CLinkedList {
    //1st
    constructor(data) {
        this.data = data;
        const node = new Nodee_1.default(this.data);
        this._head = node;
        this._tail = node;
    }
    addFirst(data) {
        let newNode = new Nodee_1.default(data);
        newNode.next = this._head;
        this._head = newNode;
        if (!this._tail)
            this._tail = newNode;
    }
    addLast(data) {
        const newNode = new Nodee_1.default(data);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
            return;
        }
        this._tail.next = newNode;
        this._tail = newNode;
    }
    deleteFirst() {
        if (!this._head)
            return;
        else {
            // Only one node
            if (!this._head.next && this._head === this._tail) {
                this._head = null;
                this._tail = null;
            }
            else {
                // At least two nodes
                let aux = this._head.next;
                this._head.next = null;
                this._head = aux;
            }
        }
    }
    deleteLast() {
        if (!this._tail)
            // no nodes
            return;
        else if (this._tail === this._head) {
            // 1 node
            this._head = null;
            this._tail = null;
        }
        else if (this._head && this._head.next) {
            // > 2 nodes 
            let nodeA = this._head;
            let nodeB = this._head.next;
            do {
                if (nodeB.next != null) {
                    nodeA = nodeB;
                    nodeB = nodeB.next;
                }
            } while (nodeB.next);
            nodeA.next = null;
            this._tail = nodeA;
        }
    }
    contains(searchedValue) {
        return this.indexOf(searchedValue) != -1;
        // let currentNode: Nodee | null = this._head;
        // while (currentNode) {
        //   if (currentNode.value === searchedValue) {
        //     return true;
        //   }
        //   currentNode = currentNode.next;
        // }
        // return false;
    }
    indexOf(searchedValue) {
        if (!this._head)
            return -1;
        let IndexCounter = 0;
        let currentNode = this._head;
        while (currentNode) {
            if (currentNode.value === searchedValue)
                break;
            else if (!currentNode.next)
                return -1;
            else {
                IndexCounter++;
                currentNode = currentNode.next;
            }
        }
        return IndexCounter;
    }
    reverse() {
        if (this._head !== null && this._tail !== null && this._head !== this._tail) {
            let auxNode = null;
            let lastIterationPoint = null;
            while (auxNode != this._head) {
                let currentNode = this._head;
                if (currentNode.next && currentNode.next != lastIterationPoint) {
                    auxNode = currentNode;
                    currentNode = currentNode.next;
                }
                else {
                    if (auxNode == this._head)
                        lastIterationPoint.next = this._head;
                    else {
                        currentNode.next = auxNode;
                        lastIterationPoint = currentNode;
                    }
                }
            }
            let auxHead = this._head;
            this._head = this._tail;
            this._tail = auxHead;
            auxHead = null;
        }
        else
            throw new Error("Not enough nodes to reverse.");
    }
    reverse2() {
        if (this._head === null || this._tail === null || this._head === this._tail) {
            throw new Error("Invalid operation: List cannot be reversed");
        }
        let prevNode = null;
        let currentNode = this._head;
        while (currentNode !== null) {
            const nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        const temp = this._head;
        this._head = this._tail;
        this._tail = temp;
    }
    printHeadTail() {
        var _a, _b;
        console.log("head: ", (_a = this._head) === null || _a === void 0 ? void 0 : _a.value, "tail: ", (_b = this._tail) === null || _b === void 0 ? void 0 : _b.value);
    }
}
exports.default = CLinkedList;
