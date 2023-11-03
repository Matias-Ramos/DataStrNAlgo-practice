type charCounter = {
    [key: string]: number;
}

export default function findFirstUnique(text: string): string{
    
    // create charObj
    let charCountObj: charCounter = {}
    const charsInArray: string[]= [...text];

    charsInArray.forEach( char => {
        if(charCountObj[char])
            charCountObj[char]++;
        else
            charCountObj[char] = 1;
    })

    // iterate charObj
    let result: string = "";
    for (let letter in charCountObj) 
    {
        if(charCountObj[letter] === 1){
            result = letter
            break;
        }
    }
    
    return result;
}

