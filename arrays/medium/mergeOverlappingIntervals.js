// Write a function that takes in a non - empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

// Each interval interval is an array of two integers, with interval[0] as the start of the interval and interval[i] as the end of the interval.

// Note that back - to - back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] are'nt overlapping; however, [1, 6] and [6, 7] are indeed overlapping. 

// Also note that the start of any particular interval will always be less than or equal to the end of the interval.

// Sample Imput:
// intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]];

// Sample Output:
// [[1, 2], [3, 8], [9, 10]]

const mergeOverlappingIntervals = (array) => {
    // create our return array
    // create pointer for return array


    // iterate through our array
        // iterate through our inner array
        // create prev and after

        // if we are on the first index of the array compare it to the previous array at the last index and also compare it to the following index in its array. see if the previous is -1 and the next is +1
            // set prev and after
            // if both values are -1 and +1 push prev value, current, and next
            // if the previous value is -1 push that value and the current value to the result
            // if the next value is +1 push that value and the current value to the result
            
        // if we are on the second index. we compare it to our previous value within its array and compare it to the first value of the next array
            // set prev and after
            // if both values are -1 and +1 push prev value, current, and next
            // if the previous value is -1 push that value and the current value to the result
            // if the next value is +1 push that value and the current value to the result

    // return our array
};

console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]])); // [[1, 2], [3, 8], [9, 10]]