import C_stack from "./Stacks/classes/C_stack"

let myStack = new C_stack<string>();
const myText: string = "(" // 
const charArray: string[] = [...myText]

for(let ch of charArray){
    myStack.push(ch)
}


console.log(myStack.expIsBalanced());
