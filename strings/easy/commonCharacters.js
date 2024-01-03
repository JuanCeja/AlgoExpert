// Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignoring multiplicity.

// Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return can be in any order.

// Sample Input:
// strings = ['abc', 'bcd', 'cbaccd']

// Sample Output: 
// ['b', 'c']

const commonCharacters = (strings) => {
    // hashmap to keep track of letters and in how many strings weve seen it in
    // result array
    
    // for loop
    // convert string to a set to remove duplicates
    // iterate our set
        // if it exists increment by 1
        // if it does not create it in the hashmap
    // iterate our hashmap
        // if the value is === to our length of the array push the character to our result array
    // return our result array
};

console.log(commonCharacters(['abc', 'bcd', 'cbaccd'])); // ['b', 'c']