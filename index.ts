import HashTable from "./Hash_Tables/classes/hashTableLinearProb";

let myHashTable = new HashTable(5);
myHashTable.put(2, "1")
myHashTable.put(2, "2")
myHashTable.put(2, "3")
myHashTable.put(2, "4")
myHashTable.put(2, "5")
// myHashTable.put(2, "6")
console.log(myHashTable) // [4, 5, 1, 2, 3]