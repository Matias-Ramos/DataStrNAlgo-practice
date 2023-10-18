import I_stack from "../interfaces/I_stack"

export default class Stack<T> implements I_stack<T>{
    private storage: (T | undefined)[] = [];
    push(item: T): void {
        this.storage.push(item)
    };
    pop(): T | undefined {
        return this.storage.pop();
    };
    peek(): T | undefined {
        return this.storage[this.storage.length];
    };
    isEmpty(): boolean {
        if (this.storage.length)
            return false;
        else
            return true;
    };

    reverse(): void {
        if(this.isEmpty() || this.storage.length === 1)
            throw new Error("There are not enough values in the stack to execute this function")

        let iOfReplaced: number = 0;
        let arrayPositions = this.storage.length - 1

        for (let j = 0; j < arrayPositions; j++) {

            let poppedItem = this.storage.pop();

            for (let i = arrayPositions; i >= 0; i--) {
                if (i == iOfReplaced) {
                    this.storage[i] = poppedItem;
                    iOfReplaced++;
                } else if (i > iOfReplaced) {
                    let previousValue = this.storage[i - 1]
                    this.storage[i] = previousValue;
                } else continue
            }


        }

    }

    reverse2(): void{
        let reversed: (T| undefined)[] = []
        let staticStlength: number = this.storage.length
        for(let i=0; i<staticStlength; i++)
            reversed.push(this.storage.pop())
        this.storage = reversed;
    }
}