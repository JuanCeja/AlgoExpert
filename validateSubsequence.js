// Given two non-empty arrays of integers, write a function that determines whether the second arrays is a subsequence of the first one. 

// A subsequence of an array is a set of number that arent necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

function isValidSubsequence(array, sequence) {
    for (let i = 0; i < array.length; i++) {
        if (sequence[0] === array[i]) {
            sequence.shift();
        }
    }
    return sequence.length ? false : true;
};

function isValidSubsequence2(array, sequence) {
    // create 2 pointers for each array
    // while loop. while they both exist in their arrays
        // if pointer at sequence === pointer at array
            // increment sequence pointer
        // increment array pointer
    // if sequence pointer is < sequence length return false else true
};

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
console.log(isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true