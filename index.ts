import HashTable from "./Hash_Tables/hashTable";

let myHashTable = new HashTable(5);
myHashTable.put( 1, "asd" )
myHashTable.put( 2, "qwe" )
console.log(myHashTable.get(2)); // qwe
myHashTable.remove(2);
console.log(myHashTable.get(2)); // null
console.log(myHashTable.storage);

