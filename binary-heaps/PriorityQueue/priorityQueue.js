class Node {
    constructor (val, priority) {
        this.val = val;
        this.priority = priority;
    }
};

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    insert(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        while(idx > 0) {
            let parentIdx = Math.floor((idx / 2) + 1);
            if(this.values[idx].priority > this.values[parentIdx].priority) {
                [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
                idx = parentIdx;
            }
        }
    }

    extractMax() {
        const length = this.values.length;
        [this.values[length - 1], this.values[0]] = [this.values[0], this.values[length - 1]];
        const end = this.values.pop();
        this.bubbleDown();
        return end;
    }

    bubbleDown() {
        let idx = 0;
        const element = this.values[0];
        const length = this.values.length;

        while (true) {
            let swap = null;
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            let leftChild, rightChild;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element)
                    || (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}