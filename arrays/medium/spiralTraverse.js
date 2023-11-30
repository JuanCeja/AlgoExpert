// Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order. 

// Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.

// array = [
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7]
// ];

// sample output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function spiralTraverse(array) {
    let result = [];
    let startRow = 0;
    let endRow = array.length - 1;
    let startCol = 0;
    let endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            result.push(array[startRow][i]);
        };

        for (let i = startRow + 1; i <= endRow; i++) {
            result.push(array[i][endCol]);
        };

        for (let i = endCol - 1; i >= startCol; i--) {
            if (endRow > startRow) result.push(array[endRow][i]);
        };

        for (let i = endRow - 1; i > startRow; i--) {
            if (endCol > startCol) result.push(array[i][startCol]);
        };

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    };
    return result;
};

console.log(spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
