// Write a function that takes in an array of integers and returns the length of the longest peak in the array.

// A peak is defined as adjacent integers in the array that are increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak.

// For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. Similarly, the integers 1,2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.

// Sample Input:
// array = [1, 2, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

// Sample Output:
// 6 because 0,  10, 6, 5, -1, -3

const longestPeak = (array) => {
    // maxPeak tracker
    // keep a counter
    let highestPeak = 0;
    let counter = 0;
    // iterate through the array
    for(let i = 0; i < array.length; i++) {
        counter++;
        let prev = i - 1;
        let next = i + 1;
        highestPeak = Math.max(highestPeak, counter);
        // if the current element is a peak reset counter
        if(array[i] > array[prev] && array[i] > array[next]) {
            counter = 0;
        };
    };
    // return maxPeak
    return highestPeak;
};

console.log(longestPeak([1, 2, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));