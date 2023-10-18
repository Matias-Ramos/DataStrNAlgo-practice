import I_stack from "../interfaces/I_stack"
import brackets from "../alias_types/brackets";

export default class Stack<T> implements I_stack<T>{
    private storage: (T | undefined)[] = [];
    push(item: T): void {
        this.storage.push(item)
    };
    pop(): T | undefined {
        return this.storage.pop();
    };
    peek(): T | undefined {
        return this.storage[this.storage.length-1];
    };
    isEmpty(): boolean {
        if (this.storage.length)
            return false;
        else
            return true;
    };

    reverse(): void{
        let reversed: ( T | undefined )[] = []
        let staticChainLength: number = this.storage.length
        for(let i=0; i<staticChainLength; i++)
            reversed.push(this.storage.pop())
        this.storage = reversed;
    }

    expIsBalanced(): boolean{
        // (([1] + <2>))
        let detectedBrackets: ( T | undefined )[] = []

        for(let stackItem of this.storage){
            for(let symbol of brackets){

                if(stackItem === symbol.opening)
                    detectedBrackets.push(this.storage.pop())
    
                if(stackItem === symbol.closing){
                    // console.log("detectedBrackets: ", detectedBrackets)
                    const lastDetectedBracket = detectedBrackets[detectedBrackets.length-1];
                    if(lastDetectedBracket === symbol.opening){
                        detectedBrackets.pop()
                    }
                    else {
                        return false
                    }
                }
            }
        }
        return true;
    }
}