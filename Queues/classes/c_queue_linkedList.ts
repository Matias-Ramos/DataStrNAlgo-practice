import LinkedList2 from "../../Linked Lists/clases/c_linkedList_2";
import Node2 from "../../Linked Lists/clases/Node2";

export default class LinkedListQueue<T>{

    public storage: T[] = [];
    private linkedList: LinkedList2<T>;
    constructor(){
        this.linkedList = new LinkedList2<T>();
    }

    enqueue(value: T): void{
        this.linkedList.addNode(value)
    }
    dequeue(): Node2<T>{
        if(this.linkedList.IsEmpty())
            throw new Error("Cannot dequeue an empty queue.")
        const removed = this.linkedList.removeFirst()
        return removed;
    }
    peek(): Node2<T> | undefined{
        return this.linkedList.getHead();
    }
    size(): number{
        return this.linkedList.size();
    }
    isEmpty(): boolean{
        return this.linkedList.IsEmpty();
    }
}