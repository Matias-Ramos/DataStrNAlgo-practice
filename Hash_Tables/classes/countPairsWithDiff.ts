export default class HashTable {
    constructor(public storage: number[]){}

    // - First attempt - O(n^2)
    countPairsWithDiff(diff: number){

        let amountOfPairs: number = 0;

        this.storage.forEach( item => {

            for( let i = 0; i < this.storage.length; i++){
                const comparison = this.storage[i];
                if((item + diff) === comparison){
                    amountOfPairs++;
                    break;
                }
            }
        })

        return amountOfPairs;
    }
    // - Second attempt - O(n)
    countPairsWithDiff2(diff: number){

        let amountOfPairs: number = 0;
        let mySet = new Set();

        this.storage.forEach( item => {
            mySet.add(item);
        })

        this.storage.forEach( item => {

            if( mySet.has(item + diff) )
                amountOfPairs++;
            if( mySet.has(item - diff) )
                amountOfPairs++;

            mySet.delete(item);
        })

        return amountOfPairs;
    }
}