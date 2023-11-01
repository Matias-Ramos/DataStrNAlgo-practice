"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const c_linkedList_3_1 = __importDefault(require("../Linked Lists/clases/c_linkedList_3"));
class HashTable {
    constructor(size) {
        this.size = size;
        this.storage = [];
    }
    put(k, v) {
        k %= this.size;
        if (!this.storage[k])
            this.storage[k] = new c_linkedList_3_1.default();
        this.storage[k].addNode(k, v);
    }
    get(k) {
        var _a;
        k %= this.size;
        if (!this.storage[k])
            return null;
        else
            return (_a = this.storage[k].tail) === null || _a === void 0 ? void 0 : _a.pair.value;
    }
    remove(k) {
        k %= this.size;
        if (this.storage[k])
            this.storage[k] = null;
    }
}
exports.default = HashTable;
