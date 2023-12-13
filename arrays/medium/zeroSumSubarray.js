// You're given a list of integers nums. Write a function that returns a boolean representing whether there exists a zero-sum subarray of nums.

// A zero-sum subarray is any subarray where all of the values add up to zero. A subarray is any contiguous section of the array. For the purposes of this problem, a subarray can be as small as one element and as long as the original array.

// Sample Input:
// nums = [-5, -5, 2, 3, -2]

// Sample Output:
// True -- The subarray [-5, 2, 3] has a sum of 0

const zeroSumSubarray = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === 0) return true;
        }
    }
    return false;
};

console.log(zeroSumSubarray([-5, -5, 2, 3, -2])); // True