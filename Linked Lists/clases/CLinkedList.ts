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
    return this.indexOf(searchedValue) != -1;
    // let currentNode: Nodee | null = this._head;
    // while (currentNode) {
    //   if (currentNode.value === searchedValue) {
    //     return true;
    //   }
    //   currentNode = currentNode.next;
    // }
    // return false;
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
  
  reverse(): void {
    if (this._head === null || this._tail === null || this._head === this._tail) {
        throw new Error("Invalid operation: List cannot be reversed");
    }
    
    let prevNode: Nodee | null = null;
    let currentNode: Nodee | null = this._head;
    while (currentNode !== null) {
        const nextNode : Nodee | null = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    let temp : Nodee | null = this._head;
    this._head = this._tail;
    this._tail = temp;
    temp = null;
}

  getKthFromTheEnd(k: number): number {
    if(k <= 0 || this._head == this._tail && this._head == null ){
      throw new Error ("K argument is invalid or the Linked List has no nodes")
    } else {

      let counter: number = 0;
      let leader: Nodee | null = this._head;
      let backer: Nodee | null = this._head;

      while( leader != null ){
        if(counter == k)
          backer = backer!.next;
        if(counter < k)
          counter++;

        leader = leader.next;
      }
      return backer!.value;
    }
  }

  printMiddle(): void{
    if(this._head == null || this._tail == null || this._head.next == this._tail)
      throw new Error("There are not enough nodes to call this function")
    else{
      
      let counter: number = 0;
      let leader: Nodee | null = this._head;
      let backer: Nodee | null = this._head;
      let middleNodes: (Nodee | null)[] = []
      
      while( leader != null ){  
        if(counter>1){
          // par
          if(counter % 2 == 0){
            backer=backer!.next;
            middleNodes = [backer];
          }
          else{
            middleNodes = [backer, backer!.next]
          }
        }

        counter++;
        leader = leader.next;
      }
      console.log(middleNodes);
    }
  }

  hasLoop(): boolean{
    if(this._head == null || this._tail == null || this._head.next == this._tail)
      throw new Error("There are not enough nodes to call this function")
    else{ 
      let leader: Nodee | null = this._head;
      let backer: Nodee | null = this._head;

      while( leader !== backer || leader !== null || backer !== null ){
        leader = leader!.next!.next;
        backer = leader!.next;
      }
      if( leader === backer )
        return true;
      else
        return false;
    }
  }

  printHeadTail(): void{
    console.log("head: ", this._head?.value, "tail: ",this._tail?.value)
  }
}
export default CLinkedList;
