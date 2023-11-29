// Write a function that takes in two non - empty arrays of integers, finds the pair of numbers(one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position. 

// Note that the absolute difference of two integers is the distance between them on the real number line.For example, the absolute difference of - 5 and 5 is 10, and the absolute difference of - 5 and - 4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

// Sample Input
// arrayOne = [-1, 5, 10, 20, 28, 3];
// arrayTwo = [26, 134, 135, 15, 17];

// Sample Output = [28, 26]

function mergeSort(array) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
};

function merge(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
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
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
};

function smallestDifference(arrayOne, arrayTwo) {

};

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])); // [28, 26]