import ILinkedList from "../interfaces/ILinkedList";
import Nodee from "./Nodee";

class CLinkedList implements ILinkedList {
  private _head: Nodee | null;
  private _tail: Nodee | null;

  //1st
  constructor(public data: number) {
    const node = new Nodee(this.data);
    this._head = node;
    this._tail = node;
  }

  addFirst(data: number): void {
    let newNode = new Nodee(data);

    newNode.next = this._head;
    this._head = newNode;
    if (!this._tail) this._tail = newNode;
  }

  addLast(data: number): void {
    const newNode = new Nodee(data);
  
    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
      return;
    }
  
    this._tail!.next = newNode;
    this._tail = newNode;
  }
  

  deleteFirst(): void {
    if (!this._head)
      return
    else {
      // Only one node
      if (!this._head.next && this._head === this._tail) {
        this._head = null;
        this._tail = null;
      } else {
        // At least two nodes
        let aux = this._head.next;
        this._head.next = null;
        this._head = aux;
      }
    }
  }

  deleteLast(): void {
    if (!this._tail)
      // no nodes
      return
    else if (this._tail === this._head) {
      // 1 node
      this._head = null;
      this._tail = null;
    } else if (this._head && this._head.next) {
      // > 2 nodes 
      let nodeA: Nodee = this._head;
      let nodeB: Nodee = this._head.next;

      do {
        if (nodeB.next != null) {
          nodeA = nodeB
          nodeB = nodeB.next
        }
      } while (nodeB.next)

      nodeA.next = null
      this._tail = nodeA
    }
  }


  contains(searchedValue: number): boolean {
    let currentNode: Nodee | null = this._head;
  
    while (currentNode) {
      if (currentNode.value === searchedValue) {
        return true;
      }
      currentNode = currentNode.next;
    }
  
    return false;
  }
  


  indexOf(searchedValue: number): number {
    if (!this._head) return -1;
    
    let IndexCounter: number = 0;
    let currentNode = this._head;
  
    while (currentNode) {
      if (currentNode.value === searchedValue) break;
      else if (!currentNode.next) return -1;
      else {
        IndexCounter++;
        currentNode = currentNode.next;
      }
    }
  
    return IndexCounter;
  }
  

  printHeadTail(): void{
    console.log("head: ", this._head?.value, "tail: ",this._tail?.value)
  }
}
export default CLinkedList;
