"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor(size) {
        this.storage = new Array(size);
    }
    put(i, value) {
        let iterations = 0;
        const maxIndex = this.storage.length - 1;
        let changeWasMade = false;
        while (true) {
            if (this.slotIsEmpty(i)) {
                this.storage[i] = value;
                changeWasMade = true;
                break;
            }
            else {
                i === maxIndex ? i = 0 : i++;
                iterations++;
                if (iterations === this.storage.length)
                    break;
            }
        }
        if (!changeWasMade)
            throw new Error("The hash table is full! The put() mnethod has not added a new value.");
    }
    slotIsEmpty(i) {
        return (this.storage[i] === undefined);
    }
}
exports.default = HashTable;
