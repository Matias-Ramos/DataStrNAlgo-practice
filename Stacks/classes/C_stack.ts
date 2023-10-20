import I_stack from "../interfaces/I_stack";
import brackets from "../alias_types/brackets";

abstract class SharedStackBackBone<T> {
  protected storage: (T | undefined) [] = []
  protected abstract push1(n: T): void;
  protected abstract push2(n: T): void;
  protected abstract pop1(): T;
  protected abstract pop2(): T;
  protected abstract isEmpty1(): boolean;
  protected abstract isEmpty2(): boolean;
}
export class SharedStack1<T> extends SharedStackBackBone<T>{

  private index: number = 0;

  override push1(n: T): void{
    this.storage[this.index] = n;
    this.index += 2;
  }

  override pop1(): T{
    if (this.storage.length === 0) throw new Error("Storage is empty");

    // PAR -> num % 2 === 0 
    const len = this.storage.length - 1 ;
    const aux = this.storage[len];

    this.storage[len] = undefined;
    this.index -= 2;

    return aux!;
  }
  override isEmpty1(): boolean{
    return this.storage.length > 0;
  }
}


class SharedStack2<T> extends SharedStackBackBone<T>{
  private index: number = 1;
}

export default class Stack<T> implements I_stack<T> {
  private storage: (T | undefined)[] = [];
  push(item: T): void {
    this.storage.push(item);
  }
  pop(): T | undefined {
    return this.storage.pop();
  }
  peek(): T | undefined {
    return this.storage[this.storage.length - 1];
  }
  isEmpty(): boolean {
    if (this.storage.length) return false;
    else return true;
  }

  reverse(): void {
    let reversed: (T | undefined)[] = [];
    let staticChainLength: number = this.storage.length;
    for (let i = 0; i < staticChainLength; i++)
      reversed.push(this.storage.pop());
    this.storage = reversed;
  }

  expIsBalanced(): boolean {
    let detectedBrackets: (T | undefined)[] = [];

    for (let stackItem of this.storage) {
      for (let symbol of brackets) {
        if (stackItem === symbol.opening) detectedBrackets.push(stackItem);
        else if (stackItem === symbol.closing) {
          const lastDetectedBracket =
            detectedBrackets[detectedBrackets.length - 1];

          if (lastDetectedBracket === symbol.opening) detectedBrackets.pop();
          else return false;
        }
      }
    }
    if (detectedBrackets.length === 0) return true;
    else return false;
  }
}
