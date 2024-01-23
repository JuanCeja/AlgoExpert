// You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of three indices backward in the array; the integer -3 represents a jump of three indices backward in the array.

// If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of -1 at index 0 brings us to the last index in the array. Similarly, a jump of 1 at the last index in the array brings us to index 0.

// Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.

// Sample Input:
// array = [2, 3, 1, -4, -4, 2]

// Sample Output:
// true

function hasSingleCycle(array) {
    let pointer = 0;
    let visitedArray = new Array(array.length).fill(false);
    visitedArray[0] = true;
    let counter = 0;
    let length = array.length;
    while (counter < length) {
        pointer += array[pointer];
        if (pointer > length) {
            pointer = (pointer - length);
        } else if (pointer < 0) {
            pointer = (length - Math.abs(pointer));
        }
        visitedArray[pointer] = true;
        counter++;
    }
    return !visitedArray.some(element => element === false);
};

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true