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
    let n = array.length;
    let result = new Array(n).fill(0);
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let product = 1;

    for (let i = 0; i < n; i++) {
        left[i] = product;
        product *= array[i];
    };

    product = 1;

    for (let i = n - 1; i >= 0; i--) {
        right[i] = product;
        product *= array[i];
        result[i] = left[i] * right[i];
    };
    return result;
};

console.log(arrayOfProducts([5, 1, 4, 2])); // [8, 40, 10, 20]