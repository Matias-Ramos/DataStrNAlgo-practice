import IQueue from "../interfaces/i_queue";

export default class Queue<T> implements IQueue<T> {
  private storage: T[] = [];
  private front: number = 0;
  private rear: number = 0;

  enqueue(item: T): void {
    this.storage[this.rear] = item;
    this.rear++;
  }

  dequeue(): T {
    if(!this.storage[this.front]) throw new Error("Cannot dequeue an empty queue.")

    const firstItem: T= this.storage[this.front++]
    this.front === this.rear && this.rear++

    return firstItem;
  }

  peek(): T {
    if(!this.storage.length || !this.storage[this.front])
      throw new Error("Cannot dequeue on empty queue.")
    return this.storage[this.rear]
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean{
    return this.storage.length>0;
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
