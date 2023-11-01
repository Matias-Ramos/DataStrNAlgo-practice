import HashTable from "./Hash_Tables/hashTable";

let myHashTable = new HashTable(5);

// **********************
// PUT TEST
console.log("NO REMOVE");
myHashTable.put( 3, "asd" )
myHashTable.put( 8, "qwe" )
// [ {3, asd}, {8, qwe} ]

// **********************
// REMOVE TEST HEAD
console.log("REMOVE TEST HEAD")
myHashTable.remove(3);
// [ {8, qwe} ]


console.log("REMOVE TEST HEAD & ONLY")
myHashTable.remove(8);


// **********************
// ADD NEW & REMOVE
console.log("ADD NEW & REMOVE")
myHashTable.put( 1, "Matt" )
console.log(myHashTable.get(1)); // Matt
myHashTable.remove(1);
console.log(myHashTable.get(1)); // undefined

