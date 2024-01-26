// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0's and 1's. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1's that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1's forming a river determine its sizes.

// Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

// Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.

// Sample Input:
// matrix = [
//     [1, 0, 0, 1, 0],
//     [1, 0, 1, 0, 0],
//     [0, 0, 1, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 0]
// ];

// Sample Output: [1, 2, 2, 2, 5]

function riverSizes(matrix) {
    const sizes = [];

    // Helper function for DFS
    function exploreRiver(row, col, size) {
        if (
            row < 0 || row >= matrix.length ||
            col < 0 || col >= matrix[0].length ||
            matrix[row][col] === 0
        ) {
            return;
        }

        matrix[row][col] = 0; // Mark the cell as visited

        // Explore horizontally and vertically
        size++;
        size = exploreRiver(row - 1, col, size); // Up
        size = exploreRiver(row + 1, col, size); // Down
        size = exploreRiver(row, col - 1, size); // Left
        size = exploreRiver(row, col + 1, size); // Right

        return size;
    }

    // Traverse the matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                sizes.push(exploreRiver(row, col, 0));
            }
        }
    }

    return sizes;
}

console.log(riverSizes(
    [
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0]
    ]
));