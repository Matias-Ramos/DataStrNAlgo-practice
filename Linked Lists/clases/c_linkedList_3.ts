import Node3 from "./Node3";

export default class LinkedList3{
    public head: Node3 | undefined;
    public tail: Node3 | undefined;

    /******************************** */


    addNode(k: number, v: string): void{
        let newNode = new Node3({ key: k, value: v })
        
        if(this.IsEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            const isNewKey: boolean= this.replaceValueifKeyExists(k, v);
            isNewKey && this.replaceTail(newNode);
        }
    }

    private replaceValueifKeyExists(k: number, v: string): boolean{
        let currentNode: (Node3 | undefined) = this.head;

        while(currentNode){
            if(currentNode.pair.key === k){
                currentNode.pair.value = v;
                break;
            }
            currentNode = currentNode.nextNode;
        }
        return (currentNode === undefined);
    }

    public getValue(k: number): string | undefined {
        let currentNode: (Node3 | undefined) = this.head;

        while(currentNode){
            if(currentNode.pair.key === k)
                return currentNode.pair.value;
            currentNode = currentNode.nextNode;
        }
        return undefined;
    }

    public deleteNode(k: number): void {
        let currentNode: (Node3 | undefined) = this.head;
        let previousNode: (Node3 | undefined);

        while(currentNode !== undefined){
            if(currentNode.pair.key === k){
                // is head && >2 nodes
                if(currentNode === this.head && currentNode.nextNode !== undefined){
                    const secondNode = currentNode.nextNode
                    currentNode.nextNode = undefined;
                    currentNode = undefined;
                    this.head = secondNode;
                }
                // is tail && >2 nodes
                else if(currentNode === this.tail && previousNode){
                    previousNode.nextNode = undefined
                    currentNode = undefined;
                }
                // single Node
                else {
                    this.head = undefined;
                    this.tail = undefined;
                }
            }
            previousNode = currentNode;
            currentNode = currentNode?.nextNode;
        }
    }

    private replaceTail(newNode: Node3): void{
        this.tail!.nextNode = newNode;
        this.tail = newNode;
    }


    /******************************** */

    removeFirst(): Node3{
        if(this.IsEmpty())
            throw new Error("Cannot remove a node on an empty Linked List.")

        let removed: Node3;
        if(this.head === this.tail)
            removed = this.removeOnSingleNode();
        else
            removed = this.removeOnMultiNode();

        return removed;
    }

    private removeOnSingleNode(): Node3{
        const oldHead = this.head
        this.head = undefined;
        this.tail = undefined;
        return oldHead!;
    }
    private removeOnMultiNode(): Node3{
        const oldHead = this.head
        this.head = this.head!.nextNode
        return oldHead!;
    }


    /******************************** */


    printHeadTail(): ( Node3 | undefined )[]{
        return [this.head, this.tail]
    }

    getHead(): Node3 | undefined {
        return this.head;
    }
    
    IsEmpty(): boolean{
        return (!this.head && !this.tail)
    }

    size(): number{
        if(this.IsEmpty())
            return 0

        let current: Node3 | undefined = this.head;
        let counter: number = 0;
        while(current != null){
            counter++;
            current = current.nextNode;
        }
        return counter;
    }
}