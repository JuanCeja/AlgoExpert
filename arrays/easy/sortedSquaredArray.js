// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. 

// For example: 
// [1, 2, 3, 5, 6, 8, 9] 
// output will be: [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(array) {
    let start = 0;
    let end = array.length - 1;
    let i = array.length - 1;
    let squaredArray = Array(array.length).fill(0);
    while (start <= end) {
        if (Math.abs(array[start]) > Math.abs(array[end])) {
            squaredArray[i] = Math.pow(array[start], 2);
            i--;
            start++;
        } else {
            squaredArray[i] = Math.pow(array[end], 2);
            i--;
            end--;
        };
    };
    return squaredArray;
};

console.log(sortedSquaredArray([-7, 1, 2, 3, 5, 6, 8, 9])) // [1, 4, 9, 25, 36, 64, 81]