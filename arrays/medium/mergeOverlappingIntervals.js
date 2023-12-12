// Write a function that takes in a non - empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

// Each interval interval is an array of two integers, with interval[0] as the start of the interval and interval[i] as the end of the interval.

// Note that back - to - back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] are'nt overlapping; however, [1, 6] and [6, 7] are indeed overlapping. 

// Also note that the start of any particular interval will always be less than or equal to the end of the interval.

// Sample Imput:
// intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]];

// Sample Output:
// [[1, 2], [3, 8], [9, 10]]

const mergeOverlappingIntervals = (array) => {
    // create empty output array
    // iterate our input array
        // if we find a interval that doesnt overlap with our last interval in our output array we just add it directly to our output array
        // else if it does loverlap we merge them. we merge them by comparing the ends and choosing the larger value and modifying the last interval in our output array.
    // return our output array
};



console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]])); // [[1, 2], [3, 8], [9, 10]]