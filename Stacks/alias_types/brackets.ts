type Bracket = {
    opening: string,
    closing: string
}
const squareBrackets: Bracket = {
    opening: "[",
    closing:"]"
}
const curlyBrackets: Bracket = {
    opening: "{",
    closing:"}"
}
const parenthesis: Bracket = {
    opening: "(",
    closing:")"
}
const chevrons: Bracket = {
    opening: "<",
    closing:">"
}
const brackets: Bracket[] = [
    squareBrackets,
    curlyBrackets,
    parenthesis,
    chevrons
]
export default brackets;