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
        // create a queue and place the starting vertex
        let queue = [start];
        // create an array to store results
        let results = [];
        // create an object to stored nodes visited
        let visited = {};
        // mark the starting vertex as visited
        visited[start] = true;
        // loop as long as there is anything in the queue
        while(queue.length) {
            // remove the first vertex from the queue and push it into the array that stores nodes visited
            let currentVertex = queue.shift();
            results.push(currentVertex);
            // loop over each vertex in the adjacency list for the vertex you are visiting.
            this.adjacencyList[currentVertex].forEach(neighbor => {
                // if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        // once you have finished looping, return the array of visited nodes
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