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
        // store max value
        const max = this.values[0];
        // remove last value
        const end = this.values.pop();
        // if theres 1 or more values in the values array
        if (this.values.length > 0) {
            // put our small value at the top and walk it down
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        // pointer to our value that well be moving down
        let idx = 0;
        // store length and the element for easier code writing
        const length = this.values.length;
        const element = this.values[0];

        // while loop
        while (true) {
            // find our left and right child indexs
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            // our leftChild and rightChild values
            // a swap var
            let leftChild, rightChild;
            let swap = null;

            // if leftChildIdx is in bounds
            // make our swap
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            // same with the right but also make sure to check if both are bigger
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    swap === null && rightChild > element
                    || swap !== null && rightChild > leftChild
                ) {
                    swap = rightChildIdx;
                }
            }
            // if we never swap
            if (swap === null) break;
            // make our swap
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);