"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findFirstUnique(text) {
    // create charObj
    let charsObj = {};
    const charsArr = [...text];
    charsArr.forEach(char => {
        if (charsObj[char])
            charsObj[char]++;
        else
            charsObj[char] = 1;
    });
    // iterate charObj
    let result = "";
    for (const letter in charsObj) {
        if (charsObj[letter] === 1) {
            result = letter;
            break;
        }
    }
    return result;
}
exports.default = findFirstUnique;
