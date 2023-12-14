// You're given an unordered list of unique integers nums in the range [1, n], where n represents the length of nums + 2. This means that two numbers in this range are missing from the list.

// Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically.

// Sample Input: 
// nums = [1, 4, 3];

// Sample Output: 
// [2, 5]-- n is 5, meaning the completed list should be [1, 2, 3, 4, 5]

const missingNumbers = (nums) => {
    let mySet = new Set();
    let result = [];
    for(let i = 1; i < nums.length + 3; i++) {
        mySet.add(i);
    };
    for(let num of nums) mySet.delete(num);
    for(let value of mySet) result.push(value);
    return result;
};

console.log(missingNumbers([1, 4, 3])); // [2, 5]