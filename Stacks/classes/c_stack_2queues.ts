export default class StackOfTwoQueues<T>{
    public q1: T[] = [];
    public q2: T[] = [];

    push(newItem: T){
        // q1 -> q2
        for(let element of this.q1){
            this.q2.push(element)
        }
        // v -> q1
        this.q1 = []
        this.q1.push(newItem);

        // q2 -> q1
        for(let element of this.q2){
            this.q1.push(element)
        }
        this.q2 = [];
    }

    pop(): T{
        if(this.isEmpty())
            throw new Error("Cannot pop on an empty stack (of two queues).")
        const removed = this.q1.shift();
        return removed!;
    }

    peek(): T | undefined{
        return this.q1[0];
    }

    size(): number{
        return this.q1.length;
    }

    isEmpty(): boolean{
        return this.q1.length === 0
    }
}