// Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

// In other words, the value at output[i] is equal to the product of every number in the input array other than input[i];

// Note that you're expected to solve this problem without using division.

// sample input:
// array = [5, 1, 4, 2]

// sample output: 
// [8, 40, 10, 20]

// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

function arrayOfProducts(array) {
    const n = array.length;
    const leftArray = new Array(n).fill(1);
    const rightArray = new Array(n).fill(1);
    const result = [];

    let leftProduct = 1;
    for (let i = 1; i < n; i++) {
        leftProduct = leftProduct * array[i - 1];
        leftArray[i] = leftProduct;
    };

    let rightProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct = rightProduct * array[i + 1];
        rightArray[i] = rightProduct;
    };

    for (let i = 0; i < n; i++) {
        result.push(leftArray[i] * rightArray[i]);
    };

    return result;
};

console.log(arrayOfProducts([5, 1, 4, 2])); // [8, 40, 10, 20]