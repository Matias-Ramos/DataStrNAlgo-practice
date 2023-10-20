"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const C_stack_1 = require("./Stacks/classes/C_stack");
let myStack = new C_stack_1.SharedStack1();
myStack.push1(10);
myStack.push1(20);
myStack.push1(30);
myStack.pop1();
console.log(myStack.storage[10]);
//# sourceMappingURL=index.js.map