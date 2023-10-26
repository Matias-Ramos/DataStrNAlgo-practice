import Node2 from "./Node2"
export default class LinkedList2<T>{
    public head: Node2<T> | undefined;
    public tail: Node2<T> | undefined;

    addFirst(value: T): void{
        let newNode = new Node2<T>(value)
        
        if(this.linkedListIsEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head!
            this.head = newNode;
        }
    }
    private linkedListIsEmpty(): boolean{
        return (!this.head && !this.tail)
    }
    printHeadTail(): ( Node2<T> | undefined )[]{
        return [this.head, this.tail]
    }

    removeFirst(): Node2<T>{
        if(this.linkedListIsEmpty())
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
}