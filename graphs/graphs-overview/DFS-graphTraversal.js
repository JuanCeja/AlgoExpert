class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) this.addVertex(v1);
        if (!this.adjacencyList[v2]) this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v => this.removeEdge(v, vertex));
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(startingVertex) {
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) dfs(neighbor);
            })
        })(startingVertex);
        return result;
    }

    depthFirstIterative(start) {
        let stack = [start];
        let result = [];
        let visited = {};

        while (stack.length) {
            let currentVertex = stack.pop();
            if (!visited[currentVertex]) {
                result.push(currentVertex);
                visited[currentVertex] = true;
                this.adjacencyList[currentVertex].forEach(neighbor => {
                    if (!visited[neighbor]) stack.push(neighbor);
                })
            }
        }
        return result;
    }

    breadthFirstSearch(start) {
        let queue = [start];
        let results = [];
        let visited = {};
        visited[start] = true;
        while (queue.length) {
            let currentVertex = queue.shift();
            results.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return results;
    }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.depthFirstRecursive('A'));
console.log(g.depthFirstIterative('A'));
console.log(g.breadthFirstSearch('A'));