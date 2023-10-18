import C_stack from "./Stacks/classes/C_stack"

let myStack = new C_stack<string>();
const myText: string = "Hello!"
const charArray: string[] = [...myText]

for(let ch of charArray){
    myStack.push(ch)
}


myStack.reverse2();

console.log(myStack);
