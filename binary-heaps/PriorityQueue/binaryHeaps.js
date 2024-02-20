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
        let start = 0;
        let end = this.values.length - 1;
        [this.values[start], this.values[end]] = [this.values[end], this.values[start]];
        let oldRoot = this.values.pop();
        this.bubbleDown();
        return oldRoot;
    }

    bubbleDown() {
        // your parent index starts at 0 (the root)
        let parent = 0;
        // find the index of the left child: 2*index + 1
        // find the index of the right child: 2*index + 2
        let leftChild = (parent * 2) + 1;
        let rightChild = (parent * 2) + 2;
        // if the left or right child is > than the element...swap. if both left and right children are larger, swap with the largest child
        if()
        // the child index you swapped to now becomes the new parent index
        // keep looping and swapping until neither child is larger than any element
        // return the old root
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.insert(1));
console.log(heap.insert(45));
console.log(heap.insert(199));
console.log(heap.extractMax());