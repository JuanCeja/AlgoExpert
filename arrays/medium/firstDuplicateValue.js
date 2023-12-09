// Given an array of integers between 1 and n, inclusinve, wehre n is the length of the array, write a function that returns the first integer that appears more than once(when the array is read from left to right).

// In other words, out of all the integers that might occur more than once in the input array, yhour function shluld return the one whose first duplicate value has the minimum index. 

// If no integer appears more than once, your function should return -1.

// Note that youre allowed to mutate the array.Given

// Sample Imput:
// array = [2, 1, 5, 2, 3, 3, 4];

// Sample Output = 2

// 2 is the integer that appears more than once. 3 also appears more than once, but the second 3 appears after the second 2.


// Sample Input 2:
// [2, 1, 5, 3, 3, 2, 4]

// Sample Output 2:
// 3

// 3 is the first integer that appears more than once. 2 also appears more than once, but the second 2 appears after the second 3.

function firstDuplicateValue(array) {
    // create our index var
    let index;
    // iterate through our array
    for(let i = 0; i < array.length; i++) {
        // calculate our index. 
        index = Math.abs(array[i]) - 1;
        // if that value is already negative return the value else make it a negative value
        if(array[index] < 0) return Math.abs(array[i]);
        else array[index] *= -1;
    };
    // return -1 if no duplicates are found
    return -1;
};

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])); // 2
console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])); // 3