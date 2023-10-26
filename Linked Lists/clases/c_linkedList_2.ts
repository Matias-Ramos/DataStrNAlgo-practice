import Node2 from "./Node2";

export default class LinkedList2<T>{
    public head: Node2<T> | undefined;
    public tail: Node2<T> | undefined;

    /******************************** */


    addNode(value: T): void{
        let newNode = new Node2<T>(value)
        
        if(this.IsEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.nextNode = newNode;
            this.tail = newNode;
        }
    }


    /******************************** */

    removeFirst(): Node2<T>{
        if(this.IsEmpty())
            throw new Error("Cannot remove a node on an empty Linked List.")

        let removed: Node2<T>;
        if(this.head === this.tail)
            removed = this.removeOnSingleNode();
        else
            removed = this.removeOnMultiNode();

        return removed;
    }

    private removeOnSingleNode(): Node2<T>{
        const oldHead = this.head
        this.head = undefined;
        this.tail = undefined;
        return oldHead!;
    }
    private removeOnMultiNode(): Node2<T>{
        const oldHead = this.head
        this.head = this.head!.nextNode
        return oldHead!;
    }


    /******************************** */


    printHeadTail(): ( Node2<T> | undefined )[]{
        return [this.head, this.tail]
    }

    getHead(): Node2<T> | undefined {
        return this.head;
    }
    
    IsEmpty(): boolean{
        return (!this.head && !this.tail)
    }

    size(): number{
        if(this.IsEmpty())
            return 0

        let current: Node2<T> | undefined = this.head;
        let counter: number = 0;
        while(current != null){
            counter++;
            current = current.nextNode;
        }
        return counter;
    }
}