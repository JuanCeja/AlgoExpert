// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic. 

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

// Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

// Note that empty arrays and arrays of one element are monotonic.

// Sample Input: 
// array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// Sample Output = True;

function isMonotonic(array) {
    if (array.length <= 1) return true;
    
    let hashtable = {
        decreasing: null,
        increasing: null
    };

    for (let i = 0; i < array.length; i++) {
        let nextValue = i + 1;
        if (hashtable.decreasing === true && hashtable.increasing === true) return false;
        if (array[i] < array[nextValue]) {
            hashtable.increasing = true;
        } else if (array[i] > array[nextValue]) {
            hashtable.decreasing = true;
        };
    };
    return hashtable.decreasing === true && hashtable.increasing === true ? false : true;
};

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])); // True