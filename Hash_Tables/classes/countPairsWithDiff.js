"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor(storage) {
        this.storage = storage;
    }
    // - First attempt - O(n^2)
    countPairsWithDiff(diff) {
        let amountOfPairs = 0;
        this.storage.forEach(item => {
            for (let i = 0; i < this.storage.length; i++) {
                const comparison = this.storage[i];
                if ((item + diff) === comparison) {
                    amountOfPairs++;
                    break;
                }
            }
        });
        return amountOfPairs;
    }
    // - Second attempt - O(n)
    countPairsWithDiff2(diff) {
        let amountOfPairs = 0;
        let mySet = new Set();
        this.storage.forEach(item => {
            mySet.add(item);
        });
        this.storage.forEach(item => {
            if (mySet.has(item + diff))
                amountOfPairs++;
            if (mySet.has(item - diff))
                amountOfPairs++;
            mySet.delete(item);
        });
        return amountOfPairs;
    }
}
exports.default = HashTable;
