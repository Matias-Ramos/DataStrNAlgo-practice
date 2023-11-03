export default class HashTable {
    constructor(private storage: number[]){}

    twoSum(target: number): number[] | null{
        for(let i = 0 ; i < this.storage.length - 1; i++){
            if( (this.storage[i] + this.storage[i + 1]) === target ){
                return [i, i+1]
            }
        }
        return null;
    }
}