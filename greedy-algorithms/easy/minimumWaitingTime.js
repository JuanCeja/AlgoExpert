// You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order.

// A query's waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries.

// Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries of durations [1, 4, 5], then the total waiting time if the queries were executed in the order of [5, 1, 4] would be (0) + (5) + (5 + 1) = 11. The first query of duration 5 would be executed immediately, so its waiting time would be 0, the second query of duration 1 would have to wait 5 seconds (the duration of the first query) to be executed, and the last wury would have to wait the duration of the first two queries before being executed. 

// Note: you're allowed to mutate the input array.

// Sample Input: queries = [3, 2, 1, 2, 6];

// Sample Output: 17

const mergeSort = (array) => {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right);
}

const merge = (arr1, arr2) => {
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
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++
    }

    return mergedArray;
}

const minimumWaitingTime = (queries) => {
    // sort the array
    // array of times
    // total time = 0
    let sortedQueries = mergeSort(queries);
    let queryTimes = [];
    let totalTime = sortedQueries[0];

    // iterate sorted array starting at 1
    for (let i = 1; i < sortedQueries.length; i++) {
        // total time = total time + current index
        // push total time
        totalTime = totalTime + sortedQueries[i];
        queryTimes.push(totalTime);
    };

    console.log(sortedQueries)
    console.log(queryTimes)
    totalTime = 0;

    // iterate array of times
    // add all values
    for(let time of queryTimes) {
        totalTime = totalTime + time;
    }
    // return total time
    return totalTime;
};

console.log(minimumWaitingTime([3, 2, 1, 2, 6])); // 17