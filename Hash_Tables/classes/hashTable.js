"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const c_linkedList_3_1 = __importDefault(require("../../Linked Lists/clases/c_linkedList_3"));
class HashTable {
    constructor(size) {
        this.size = size;
        this.storage = [];
    }
    getTail(k) {
        var _a, _b;
        const index = this.hash(k);
        return (_b = (_a = this.storage[index]) === null || _a === void 0 ? void 0 : _a.tail) === null || _b === void 0 ? void 0 : _b.pair.value;
    }
    getHead(k) {
        var _a, _b;
        const index = this.hash(k);
        return (_b = (_a = this.storage[index]) === null || _a === void 0 ? void 0 : _a.head) === null || _b === void 0 ? void 0 : _b.pair.value;
    }
    put(k, v) {
        const index = this.hash(k);
        if (!this.slotIsActive(index))
            this.storage[index] = new c_linkedList_3_1.default();
        this.storage[index].addNode(k, v);
    }
    get(k) {
        const index = this.hash(k);
        if (!this.slotIsActive(index))
            return undefined;
        else
            return this.storage[index].getValue(k);
    }
    remove(k) {
        const index = this.hash(k);
        if (!this.slotIsActive(index))
            return -1;
        else
            this.storage[index].deleteNode(k);
    }
    slotIsActive(index) {
        return (this.storage[index] !== null && this.storage[index] !== undefined);
    }
    hash(k) {
        return k % this.size;
    }
}
exports.default = HashTable;
