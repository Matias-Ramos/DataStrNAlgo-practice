
export default function findFirstRepeated(originalTxt: string): string{

    let set = new Set<string>();
    
    for (let letter of originalTxt){
        if(set.has(letter))
            return letter;
        set.add(letter)
    }

    return "";
}