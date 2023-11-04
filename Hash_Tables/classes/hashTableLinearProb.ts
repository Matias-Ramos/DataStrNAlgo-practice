export default class HashTable {
    public storage: string[];
    private slotsInUse: number = 0;
    constructor(size: number){
        this.storage = new Array(size);
    }

    put(i: number, value: string): void{
        
        const maxIndex = this.storage.length - 1;
        if(this.slotsInUse === maxIndex)
            throw new Error("The hash table is full! The put() method has not added a new value.")


        let iterations: number = 0;
        while(true){
            if(this.slotIsEmpty(i)){
                this.storage[i] = value;
                this.slotsInUse++;
                break;
            } else {
                i === maxIndex ? i = 0 : i++;
                iterations++;
                if( iterations === this.storage.length ) break;
            }
        }
    }
    private slotIsEmpty(i: number): boolean{
        return (this.storage[i] === undefined);
    }
}