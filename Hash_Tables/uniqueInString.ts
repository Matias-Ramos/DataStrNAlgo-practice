export default function findFirstUnique(text: string): string{
    
    // create charObj
    let charsObj: charCounter = {}
    const charsArr: string[]= [...text];
    charsArr.forEach( char => {
        if(charsObj[char])
            charsObj[char]++;
        else
            charsObj[char] = 1
    })

    // iterate charObj
    let result: string = "";
    for (const letter in charsObj) 
    {
        if(charsObj[letter] === 1){
            result = letter
            break;
        }
    }
    
    return result;
}

type charCounter = {
    [key: string]: number;
}