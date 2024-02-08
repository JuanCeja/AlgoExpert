class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(v1, v2) {
        if(!this.adjacencyList[v1]) this.addVertex(v1);
        if(!this.adjacencyList[v2]) this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        
    };
};

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addVertex('Lehi');
g.addEdge('San Francisco', 'Tokyo');
g.addEdge('New York', 'Seattle');
console.log(g);