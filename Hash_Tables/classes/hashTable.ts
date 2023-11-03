import LinkedList3 from "../../Linked Lists/clases/c_linkedList_3";

export default class HashTable {


    public storage: (LinkedList3 | null)[] = [];
    constructor(public size: number){}
    
    public getTail(k: number): string | undefined{
        const index = this.hash(k);
        return this.storage[index]?.tail?.pair.value;
    }
    public getHead(k: number): string | undefined{
        const index = this.hash(k);
        return this.storage[index]?.head?.pair.value;
    }

    put(k: number, v: string): void{
        const index = this.hash(k);
        if(!this.slotIsActive(index))
            this.storage[index] = new LinkedList3();
        this.storage[index]!.addNode(k, v)
    }

    get(k: number): string | undefined {
        const index = this.hash(k);
        if(!this.slotIsActive(index))
            return undefined;
        else
            return this.storage[index]!.getValue(k);
    }
    
    remove(k: number): void | number{
        const index = this.hash(k);
        if(!this.slotIsActive(index))
            return -1;
        else
            this.storage[index]!.deleteNode(k);       
    }

    private slotIsActive(index: number){
        return (this.storage[index]!== null && this.storage[index]!== undefined)
    }

    private hash(k: number): number{
        return k % this.size;
    }

    

}