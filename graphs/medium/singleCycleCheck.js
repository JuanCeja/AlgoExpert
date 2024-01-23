// You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of three indices backward in the array; the integer -3 represents a jump of three indices backward in the array.

// If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of -1 at index 0 brings us to the last index in the array. Similarly, a jump of 1 at the last index in the array brings us to index 0.

// Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.

// Sample Input:
// array = [2, 3, 1, -4, -4, 2]

// Sample Output:
// true

function hasSingleCycle(array) {
    // tracking array
    // pointer = 0
    // loop input array
        // add current element to pointer
            // if pointer is > array.length and redeclare pointer
                // start from beginning
            // if pointer is < 0
                // start from the end and redeclare pointer
        // set pointer location to true
    // iterate the tracking array
        // if you find a false value return false
    // return true
};

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true