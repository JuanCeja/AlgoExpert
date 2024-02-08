class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
};

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addEdge('San Francisco', 'Tokyo');
g.addEdge('New York', 'Seattle');
console.log(g);