class Heap {
    constructor(values) {
        this.values = values;
    }

    insert(value) {
        // push the value into the values property on the heap
        this.values.push(value);
        let parentIndex = Math.floor(((this.values.length - 1) - 1) / 2);
        
        // bubble the value up to its correct spot
        if(value > this.values[parentIndex]) this.bubbleUp(value);
    }

    bubbleUp(value) {
        // create a var called index which is the length of the values property - 1
        // create a var called parentIndex which is the floor of index-1 / 2
        // keep looping as long as the values element at the parentIndex is less than the values element at the child index
            // swap the value of the values element at  the parentIndex with the value of the element property at the child index
            // set the index to be the parentIndex, and start over
    }
}