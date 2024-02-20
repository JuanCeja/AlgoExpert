class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this;
    }

    bubbleUp() {
        let childIndex = this.values.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);

        while (this.values[parentIndex] < this.values[childIndex]) {
            [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]];
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2)
        }
    }

    extractMax() {
        // swap the first value in the values property with the last one
        // pop from the values property, so you can return the value at the end
        // have the new root 'sink down' to the correct spot 
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.insert(1));
console.log(heap.insert(45));
console.log(heap.insert(199));