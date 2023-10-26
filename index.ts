import LinkedList2 from "./Linked Lists/clases/c_linkedList_2";

let myLiLiQ = new LinkedList2<number>();
myLiLiQ.addFirst(10)
myLiLiQ.addFirst(20)
myLiLiQ.addFirst(30)
myLiLiQ.removeFirst()
console.log(myLiLiQ.printHeadTail());
