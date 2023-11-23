// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. 

// For example: 
// [1, 2, 3, 5, 6, 8, 9] 
// output will be: [1, 4, 9, 25, 36, 64, 81]

const mergeSort = (array) => {
    if(array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
};

function merge(leftArray, rightArray) {
    let leftIdx = 0;
    let rightIdx = 0;
    let outputArray = [];
    while (leftIdx < leftArray.length && rightIdx < rightArray.length) {
        if (leftArray[leftIdx] < rightArray[rightIdx]) {
            outputArray.push(leftArray[leftIdx]);
            leftIdx++
        } else {
            outputArray.push(rightArray[rightIdx]);
            rightIdx++;
        }
    };
    while (leftIdx < leftArray.length) {
        outputArray.push(leftArray[leftIdx]);
        leftIdx++;
    }
    while (rightIdx < rightArray.length) {
        outputArray.push(rightArray[rightIdx]);
        rightIdx++;
    }
    return outputArray;
};

function sortedSquaredArray(array) {
    let outputArray = [];
    for (let i = 0; i < array.length; i++) {
        outputArray[i] = array[i] * array[i];
    };
    return mergeSort(outputArray);
};

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])) // [1, 4, 9, 25, 36, 64, 81]