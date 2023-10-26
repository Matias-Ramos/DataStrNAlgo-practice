import StackOfTwoQueues from "./Stacks/classes/c_stack_2queues";

const myStack = new StackOfTwoQueues<number>();

console.log(myStack.isEmpty()); // true
console.log(myStack.peek()); // undefined
myStack.push(10)
myStack.push(20)
myStack.push(30)
const removed = myStack.pop();
console.log(removed); // 30
console.log(myStack.isEmpty()); // false
console.log(myStack.size()) // 2

