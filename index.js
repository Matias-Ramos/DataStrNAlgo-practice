"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twoSum_1 = __importDefault(require("./Hash_Tables/classes/twoSum"));
let myHashTable = new twoSum_1.default([2, 7, 11, 15]);
const result = myHashTable.twoSum(9);
console.log(result);
