import CLinkedList from "./clases/CLinkedList";

let newLinkedList = new CLinkedList(1);
newLinkedList.addLast(2); 
newLinkedList.addLast(3); 
newLinkedList.reverse();
newLinkedList.printHeadTail()