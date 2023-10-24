import IQueue from "../interfaces/i_queue";

export default class Queue<T> implements IQueue<T> {
  private _storage: T[] = [];
  private _front: number = 0;
  private _rear: number = 0;

  get storage(): T[]{
    let auxArr: T[] = [];
    for( let i = this._front; i < this._rear; i++){
      auxArr.push(this._storage[i])
    }
    return auxArr;
  }

  enqueue(item: T): void {
    this._storage[this._rear] = item;
    this._rear++;
  }

  dequeue(): T {
    if(!this._storage[this._front]) throw new Error("Cannot dequeue an empty queue.")

    const firstItem: T= this._storage[this._front++]
    this._front === this._rear && this._rear++
    return firstItem;
  }

  peek(): T {
    if(!this._storage.length || !this._storage[this._front])
      throw new Error("Cannot dequeue on empty queue.")
    return this._storage[this._rear - 1]
  }

  size(): number {
    return this._storage.length;
  }

  isEmpty(): boolean{
    const hasFront: boolean = this._storage[this._front] ? true : false
    const hasRear: boolean = this._storage[this._rear] ? true : false
    return (!hasFront && !hasRear);
  }



  // reverse(): void{
  //   let auxArr: T [] = [...this.storage];
  //   const len = this.storage.length - 1 ;

  //   for( let i = len; i >= 0; i--){
  //     const dequeued = this.dequeue()
  //     auxArr[i] = dequeued
  //   }

  //   this.storage = auxArr;
  // }



}
