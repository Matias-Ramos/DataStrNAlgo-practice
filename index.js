"use strict";
// 1- Extend the Array class and add a new method to return the largest number. What is the runtime complexity of this method? O(n)
// 2- Extend the Array class and add a method to return the common items in this array and another array.
// 3- Extend the Array class and add a method to reverse the array. For example, if the array includes [1, 2, 3, 4], after reversing and printing it, we should see [4, 3, 2, 1].
// 4-  Extend the Array class and add a new method to insert an item at a given index: 
// public void insertAt(int item, int index)
class myArray {
    constructor(array) {
        this.array = array;
    }
    insert(newNum) {
        this.array.push(newNum);
    }
    removeAt(index) {
        this.array.splice(index, 1);
    }
    indexOf(searchedValue) {
        return this.array.indexOf(searchedValue);
    }
}
class superArray extends myArray {
    constructor(array) {
        super(array);
    }
    get max() {
        return Math.max(...this.array);
    }
    get repeatedItems() {
        const check_duplicate_in_array = (input_array) => {
            let seen = new Set();
            let duplicate_elements = [];
            for (let num of input_array) {
                if (seen.has(num)) {
                    duplicate_elements.push(num);
                }
                else {
                    seen.add(num);
                }
            }
            return duplicate_elements;
        };
        return check_duplicate_in_array(this.array);
    }
    reverse() {
        let aux = [];
        let counter = 0;
        let maxIndex = this.array.length - 1;
        for (let i = maxIndex; i > 0; i--) {
            aux[counter++] = this.array[i];
        }
        this.array = [...aux];
    }
    insertAt(item, index) {
        let maxIndex = this.array.length - 1;
        if (this.array[0] && index >= 0 && index <= maxIndex)
            this.array[index] = item;
        else
            throw new Error;
    }
}
let crazyArray = new superArray([10, 20, 10, 20, 30, 50, 40]);
crazyArray.insertAt(11, 0);
console.log(crazyArray);
