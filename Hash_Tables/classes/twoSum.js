"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor(storage) {
        this.storage = storage;
    }
    twoSum(target) {
        for (let i = 0; i < this.storage.length - 1; i++) {
            if ((this.storage[i] + this.storage[i + 1]) === target) {
                return [i, i + 1];
            }
        }
        return null;
    }
}
exports.default = HashTable;
