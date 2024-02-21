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
        this.bubbleDown(oldRoot);
    }

    bubbleDown(oldRoot) {
        let parent = 0;
        let leftChild = (parent * 2) + 1;
        let rightChild = (parent * 2) + 2;
        while (this.values[parent] < this.values[leftChild] || this.values[parent] < this.values[rightChild]) {
            if (this.values[parent] < this.values[leftChild] && this.values[parent] < this.values[rightChild]) {
                if (this.values[leftChild] > this.values[rightChild]) {
                    [this.values[parent], this.values[leftChild]] = [this.values[leftChild], this.values[parent]];
                    parent = leftChild;
                } else {
                    [this.values[parent], this.values[rightChild]] = [this.values[rightChild], this.values[parent]];
                    parent = rightChild;
                };
            } else if (this.values[leftChild] > this.values[parent]) {
                [this.values[parent], this.values[leftChild]] = [this.values[leftChild], this.values[parent]];
                parent = leftChild;
            } else {
                [this.values[parent], this.values[rightChild]] = [this.values[rightChild], this.values[parent]];
                parent = rightChild;
            };
        }
        return oldRoot;
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.insert(1));
console.log(heap.insert(45));
console.log(heap.insert(199));
console.log(heap.extractMax());