export default class Node2<T>{
    constructor(public value: T, public nextNode: Node2<T> | undefined = undefined){}
}

