import CLinkedList from "./clases/CLinkedList";

let newLinkedList = new CLinkedList(1);
newLinkedList.addLast(2); // 1, 2
newLinkedList.printHeadTail()
console.log("contains 2?" , newLinkedList.contains(2) )
console.log("Index of 1: " , newLinkedList.indexOf(1) )
