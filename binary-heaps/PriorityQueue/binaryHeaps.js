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

    bubbleDown() {
        // your parent index starts at 0 (the root)
        // find the index of the left child: 2*index + 1
        // find the index of the right child: 2*index + 2
        // if the left or right child is > than the element...swap. if both left and right children are larger, swap with the largest child
        // the child index you swapped to now becomes the new parent index
        // keep looping and swapping until neither child is largen than any element
        // return the old root
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.insert(1));
console.log(heap.insert(45));
console.log(heap.insert(199));