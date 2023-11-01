"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashTable_1 = __importDefault(require("./Hash_Tables/hashTable"));
let myHashTable = new hashTable_1.default(5);
myHashTable.put(1, "asd");
myHashTable.put(2, "qwe");
console.log(myHashTable.get(2)); // qwe
myHashTable.remove(2);
console.log(myHashTable.get(2)); // null
console.log(myHashTable.storage);
