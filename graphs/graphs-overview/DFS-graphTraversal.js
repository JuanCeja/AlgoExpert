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
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        if (!this.adjacencyList[startingVertex]) return result;

        (function dfs(vertex) {
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor);
            })
        })(startingVertex)
        return result;
    }

    depthFirstIterative (vertex) {
        // create a stack to help us keep track of vertices
        // create a list to store the end result to be returned at the end
        // create an object to store visited vertices
        // add the starting vertex to the stack and mark it visited
        // while the stack has something in it
            // pop the next vertex from the stack
            // if that vertex hasn't been visited yet
                // mark it as visited
                // add it to the results list
                // push all of its neighbors into the stack
        // return the result
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



//     dfsRecursive(vertex) {
//         // create a list to store the end result, to be returned at the very end
//         // create an object to store visited vertices
//         // create a helper function which accepts the vertex
//             // the helper function should return early if the vertex is empty
//             // the helper function should place the vertex it accepts into the visited object and push that vertex into the result array
//             // loop over all of the values in the adjacencyList for that vertex
//             // if any of those values have not been visited, recursively invoke the helper function with that vertex
//     }
