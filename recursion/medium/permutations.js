// Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.

// If the input array is empty, the function should return an empty array.

// Sample Input: array = [1, 2, 3]
// Sample Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

const getPermutations = (array, perm = [], output = []) => {
    if (array.length === 0) {
        output.push(perm);
        return [];
    }

    for (let i = 0; i < array.length; i++) {
        let curr = array[i];
        let newArr = array.filter(integer => integer !== curr);
        let newPerm = perm.concat([curr]);
        getPermutations(newArr, newPerm, output);
    }

    return output;
};

console.log(getPermutations([1, 2, 3]));
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]