// Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignoring multiplicity.

// Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return can be in any order.

// Sample Input:
// strings = ['abc', 'bcd', 'cbaccd']

// Sample Output: 
// ['b', 'c']

const commonCharacters = (strings) => {
    let hashmap = {};
    let result = [];

    for (let i = 0; i < strings.length; i++) {
        let mySet = new Set(strings[i]);

        for (let value of mySet) {
            if (hashmap[value]) hashmap[value]++;
            else hashmap[value] = 1;
        };
    };

    for (let key in hashmap) {
        if (hashmap[key] === strings.length) result.push(key);
    };
    return result;
};

console.log(commonCharacters(['abc', 'bcd', 'cbaccd'])); // ['b', 'c']