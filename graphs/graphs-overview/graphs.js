class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) this.addVertex(v1);
        if (!this.adjacencyList[v2]) this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    };

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v => this.removeEdge(v, vertex));
        delete this.adjacencyList[vertex];
    }
};

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addVertex('Lehi');
g.addEdge('San Francisco', 'Tokyo');
g.addEdge('San Francisco', 'San Diego');
g.addEdge('Tokyo', 'San Diego');
g.addEdge('Yosemite', 'San Diego');
g.addEdge('New York', 'Seattle');
g.removeEdge('New York', 'Seattle');
g.addEdge('New York', 'Miami');
g.removeVertex('San Diego');
g.removeVertex('Lehi');
g.removeVertex('Seattle');
console.log(g);