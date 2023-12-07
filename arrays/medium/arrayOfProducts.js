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
    // store array length in var
    // start by creating our left and right array filled with 1s
    // product var
    // result array
    // loop through our array storing our left products
        //  add our product to left array
        // multiply product with our current value
    // reset product back to 1
    // loop through our array storing our right products
        //  add our product to left array
        // multiply product with our current value
    // calculate our final product for our return array
};

console.log(arrayOfProducts([5, 1, 4, 2])); // [8, 40, 10, 20]