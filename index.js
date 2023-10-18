"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const C_stack_1 = __importDefault(require("./Stacks/classes/C_stack"));
let myStack = new C_stack_1.default();
const myText = "(([1] + <2>))";
const charArray = [...myText];
for (let ch of charArray) {
    myStack.push(ch);
}
console.log(myStack.expIsBalanced());
//# sourceMappingURL=index.js.map