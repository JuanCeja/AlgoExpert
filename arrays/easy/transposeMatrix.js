//  You're given a 2D array of integers matrix. Write a function that returns the transpose of the matrix.

//  The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); it switches the row and column indices of the original matrix.

//  You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same. 

// Sample Input #1
// matrix = [
//     [1, 2]
// ]
// Sample Output #1 = [[1], [2]]

// Sample Input #2
// matrix = [
//     [1, 2],
//     [3, 4], 
//     [5, 6]
// ]
// Sample Output #2 = [
//     [1, 3, 5], 
//     [2, 4, 6]
// ]

// Sample Input #3
// matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// Sample Output #3 =
// [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]

function transposeMatrix(matrix) {
    let array = [];

    for (let i = 0; i < matrix.length; i++) {
        array.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            array[i].push(matrix[j][i]);
        }
    }
    return array;
};

console.log(transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); //  [ [1, 4, 7], [2, 5, 8], [3, 6, 9] ]