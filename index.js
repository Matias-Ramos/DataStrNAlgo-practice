"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CLinkedList_1 = __importDefault(require("./clases/CLinkedList"));
let newLinkedList = new CLinkedList_1.default(1);
newLinkedList.addLast(2);
newLinkedList.addLast(3);
newLinkedList.addLast(4);
newLinkedList.printMiddle();
