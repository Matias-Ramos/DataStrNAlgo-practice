"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const c_linkedList_2_1 = __importDefault(require("./Linked Lists/clases/c_linkedList_2"));
let myLiLiQ = new c_linkedList_2_1.default();
myLiLiQ.addFirst(10);
myLiLiQ.addFirst(20);
myLiLiQ.addFirst(30);
myLiLiQ.removeFirst();
console.log(myLiLiQ.printHeadTail());
