// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

// The function should perform this in place(i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

// Sample Input: array = [2, 1, 2, 2, 2, 3, 4, 2]
//               toMove = 2

// Sample Output: [1, 3, 4, 2, 2, 2, 2, 2]

function moveElementToEnd(array, toMove) {
    let pointer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== toMove) {
            [array[pointer], array[i]] = [array[i], array[pointer]];
            pointer++;
        }
    };
    return array;
};

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)); // [1, 3, 4, 2, 2, 2, 2, 2]