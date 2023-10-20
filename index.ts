import { SharedStack1 } from "./Stacks/classes/C_stack";

let myStack = new SharedStack1<number>();
myStack.push1(10)
myStack.push1(20)
myStack.push1(30)
myStack.pop1();

console.log(myStack.storage[10])