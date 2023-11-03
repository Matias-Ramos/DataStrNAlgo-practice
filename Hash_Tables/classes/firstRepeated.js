"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findFirstRepeated(originalTxt) {
    let set = new Set();
    for (let letter of originalTxt) {
        if (set.has(letter))
            return letter;
        set.add(letter);
    }
    return "";
}
exports.default = findFirstRepeated;
