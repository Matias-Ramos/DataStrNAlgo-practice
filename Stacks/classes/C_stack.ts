import I_stack from "../interfaces/I_stack";
import brackets from "../alias_types/brackets";
import { SS_Unit } from "../alias_types/shared_stack_unit";


abstract class SharedStackBackBone<T> {
  protected index: number = 0;
  protected storage: ( SS_Unit<T, number> | undefined )[] = []
}
export class SharedStack1<T> extends SharedStackBackBone<T>{

  push1(n: T): void {

    const new_node: SS_Unit<T, number> = {
      value: n,
      stack: 1
    }

    this.storage[this.index] = new_node;
    this.index++;
  }

  pop1(): T | undefined {
    if (this.storage.length === 0) {
      throw new Error("Storage is empty")
    } else {
      let removed: T | undefined = undefined;
      const len: number = this.storage.length - 1;

      for (let i = len; i >= 0; i--) {
        if (this.storage?[i].stack === 1) {
          removed = this.storage[i].value;
          this.storage[i].stack = undefined;
          // this.storage[i].value = undefined;
          break;
        }
      }

      return removed;
    }
  }
  isEmpty1(): boolean{
    return this.storage.length > 0;
  }
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
