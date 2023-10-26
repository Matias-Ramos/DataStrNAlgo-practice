export default class ReverserQueue<T>{
    constructor(public storage: T[], public k: number){
        this.reverse();
    }

    reverse(): void{
        let dequeues: T[] = this.dequeueGroup();
        this.enqueueStackOf(dequeues);
    }

    private dequeueGroup(): T[]{
        let auxArr: T[] = []
        for (let i = 0; i <= (this.k - 1); i++) {
            auxArr.push(this.storage[i])
        }
        return auxArr
    }

    private enqueueStackOf(arr: T[]): void{
        let counter: number = 0;
        for (let i = (this.k - 1); i >= 0 ; i--) {
            this.storage[counter++] = arr[i]
        }
    }
}