"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CLinkedList_1 = __importDefault(require("./clases/CLinkedList"));
let newLinkedList = new CLinkedList_1.default(1);
newLinkedList.addLast(2); // 1, 2
newLinkedList.printHeadTail();
console.log("contains 2?", newLinkedList.contains(2));
console.log("Index of 1: ", newLinkedList.indexOf(1));
