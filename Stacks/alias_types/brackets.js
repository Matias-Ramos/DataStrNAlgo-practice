"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const squareBrackets = {
    opening: "[",
    closing: "]"
};
const curlyBrackets = {
    opening: "{",
    closing: "}"
};
const parenthesis = {
    opening: "(",
    closing: ")"
};
const chevrons = {
    opening: "<",
    closing: ">"
};
const brackets = [
    squareBrackets,
    curlyBrackets,
    parenthesis,
    chevrons
];
exports.default = brackets;
