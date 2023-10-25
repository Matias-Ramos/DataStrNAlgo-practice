export default class PriorityQueue<T>{
    public storage: T[] = [];

    push(item: T): void{
        if(this.isEmpty())
            this.storage[0] = item;
        else {
            this.shiftItemsToInsert(item);
        }
    }
    private isEmpty(): boolean{
        return this.storage.length === 0
    }
    private shiftItemsToInsert(item: T){
        for(let i = (this.storage.length - 1); i>=0 ; i--){
            if( item > this.storage[i] ){
                this.storage[i+1] = item;
                break;
            } else {
                this.storage[i+1] = this.storage[i];
                i === 0 && (this.storage[i] = item);
            }
        }
    }
}

