// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic. 

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

// Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

// Note that empty arrays and arrays of one element are monotonic.

// Sample Input: 
// array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// Sample Output = True;

function isMonotonic(array) {
    // create our base case
    // create a hashtable that stores decreasing and increasing
    // iterate our array using a for loop
        // create variable that sees the next element
        // if current index value is smaller than the next value change decreasing to true on the hashtable
        // if current index value is larger than the next value change increasing to true on the hashtable
    // is both are true return false else true
};

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])); // True