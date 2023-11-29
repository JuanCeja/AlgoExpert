// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

// If no three numbers sum up to the target sum, the function should return an empty array.

// Sample Input: array = [12, 3, 1, 2, -6, 5, -8, 6]
// Target = 0
// Sample Output = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

function mergeSort(array) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
};

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArray = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    };
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    };
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    };
    return mergedArray;
};

function threeNumberSum(array, targetSum) {
    let sortedArray = mergeSort(array);
    let results = [];

    for (let i = 0; i < sortedArray.length; i++) {
        let start = i + 1;
        let end = sortedArray.length - 1;
        while (start < end) {
            let total = sortedArray[i] + sortedArray[start] + sortedArray[end];
            if (total === targetSum) {
                results.push([sortedArray[i], sortedArray[start], sortedArray[end]]);
                start++;
                end--;
            } else if (total < targetSum) {
                start++;
            } else {
                end--;
            }
        };
    };
    return results;
};

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)) // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]