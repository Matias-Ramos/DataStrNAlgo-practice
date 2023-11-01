"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findFirstUnique(text) {
    // create charObj
    let charCountObj = {};
    const charsInArray = [...text];
    charsInArray.forEach(char => {
        if (charCountObj[char])
            charCountObj[char]++;
        else
            charCountObj[char] = 1;
    });
    // iterate charObj
    let result = "";
    for (let letter in charCountObj) {
        if (charCountObj[letter] === 1) {
            result = letter;
            break;
        }
    }
    return result;
}
exports.default = findFirstUnique;
