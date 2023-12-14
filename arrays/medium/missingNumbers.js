// You're given an unordered list of unique integers nums in the range [1, n], where n represents the length of nums + 2. This means that two numbers in this range are missing from the list.

// Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically.

// Sample Input: 
// nums = [1, 4, 3];

// Sample Output: 
// [2, 5]-- n is 5, meaning the completed list should be [1, 2, 3, 4, 5]

const missingNumbers = (nums) => {
    nums.push(1);
    nums.push(1);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let num = Math.abs(nums[i]);
        nums[num - 1] = nums[num - 1] * -1;
    };
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] > 0) result.push(j + 1);
    };
    return result;
};

console.log(missingNumbers([1, 4, 3])); // [2, 5]