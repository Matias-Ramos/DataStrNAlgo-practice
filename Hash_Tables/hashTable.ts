import LinkedList3 from "../Linked Lists/clases/c_linkedList_3";

export default class HashTable {

    public storage: (LinkedList3 | null)[] = [];
    constructor(public size: number){}

    put(k: number, v: string): void{
        const index = this.hash(k);
        if(!this.slotIsActive(index))
            this.storage[index] = new LinkedList3();
        this.storage[index]!.addNode(k, v)
    }

    get(k: number): string | null{
        const index = this.hash(k);
        if(!this.slotIsActive(index))
            return null
        else
            return this.storage[index]!.tail?.pair.value!
    }
    
    remove(k: number): void{
        const index = this.hash(k);
        if(this.slotIsActive(index))
            this.storage[index] = null;
    }

    private slotIsActive(index: number){
        return (this.storage[index]!== null && this.storage[index]!== undefined)
    }

    private hash(k: number): number{
        return k % this.size;
    }

}