class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = [vertex2];
            this.adjacencyList[vertex2] = [vertex1];
        } else if (!this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = [vertex2];
        } else if (!this.adjacencyList[vertex2] && this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex2] = [vertex1];
        } else {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    };

    
};

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');
console.log(g);