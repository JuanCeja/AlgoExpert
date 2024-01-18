// Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.

// If the input array is empty, the function should return an empty array.

// Sample Input: array = [1, 2, 3]
// Sample Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

const getPermutations = (array) => {
    // if arr lenght and perm length !== 0
        // push perm to perms
    // else
        // loop array
            // init newArray from current array except value at index i 
            // init current permutation wihch is previous permutation with adding current value at index
            // call recursion with newArray, newPerm, perms

    // return perms
    
};

console.log(getPermutations([1, 2, 3]));
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]