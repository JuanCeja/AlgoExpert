// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value). 

// For example, if you're given coins =[1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

// Sample Input:
// coins = [5, 7, 1, 1, 2, 3, 22] = 20

function mergeSort(array) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
};

function merge(left, right) {
    let p1 = 0;
    let p2 = 0;
    let sortedArray = [];
    while (p1 < left.length && p2 < right.length) {
        if (left[p1] < right[p2]) {
            sortedArray.push(left[p1]);
            p1++;
        } else {
            sortedArray.push(right[p2]);
            p2++;
        }
    };
    while (p1 < left.length) {
        sortedArray.push(left[p1]);
        p1++;
    };
    while (p2 < right.length) {
        sortedArray.push(right[p2]);
        p2++;
    };
    return sortedArray;
};

function nonConstructibleChange(coins) {
    let sortedCoins = mergeSort(coins);
    let change = 0;
    for (let i = 0; i < sortedCoins.length; i++) {
        if(sortedCoins[i] > change + 1) {
            return change + 1;
        } else {
            change += sortedCoins[i];
        }
    };
};

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // 20