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
        const length = this.values.length;
        [this.values[length - 1], this.values[0]] = [this.values[0], this.values[length - 1]];
        const end = this.values.pop();
        this.bubbleDown;
        return end;
    }

    bubbleDown() {
        let idx = 0;
        let swap = null;
        const element = this.values[0];
        const length = this.values.length;

    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
console.log(heap);
console.log(heap.extractMax()); // 55, 45, 41, 39, 27, 12, 33, 1, 18
console.log(heap);