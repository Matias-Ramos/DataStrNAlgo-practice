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

    // set relation between nodes
    newNode.next = this._head;

    // update head
    this._head = newNode;
  }

  addLast(data: number): void {
    let newNode = new Nodee(data);

    // set relation between nodes
    if (this._tail) this._tail.next = newNode;

    // update tail
    this._tail = newNode;
  }

  deleteFirst(): void {
    if (this._head) {

      // At least two nodes
      if (this._head.next){
        let aux = this._head.next;
        this._head.next = null;
        this._head = aux;
      }

      // Only one node
      else this._head = null;
    }
  }

  deleteLast(): void {
    // 1. Iterar la lista
    // 2. Identificar y referenciar al ante ultimo nodo
    // 3. unlink it del ultimo nodo (.next)
    // 4. actualizar tail
    do{

    } while(this._tail?.next)
  }


  
  contains(): boolean {
    return false;
  }
  indexOf(): number {
    return 0;
  }
}
export default CLinkedList;
