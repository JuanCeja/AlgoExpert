// Write a function that takes in an array of unique integers and returns its powerset.

// The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1, 2] is [[], [1], [2], [1, 2]].For

// Note that the sets in the powerset do not need to be ion any particular order.

// Sample Input: array = [1, 2, 3]
// Sample Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

const powerset = (array) => {
    // output = [[]]
    // iterate array
        // length of output
        // iterate output
            // currentSet = current array element
            // push to every set in output a new set with its new set
    // return output
};

console.log(powerset([1, 2, 3]));
// [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]