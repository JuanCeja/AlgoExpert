// // Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

// // The first non-repeating character is the first character in a string that occurs only once.

// // If the input string doesn't have any non-repeating characters, your function should return -1.

// Sample Input:
// string = "abcdcaf"

// Sample Output: 1 // The first non-repeating characters is "b" and is found at index 1

const firstNonRepeatingCharacter = (string) => {
    let hashmap = {};
    let index = Infinity;
    for (let i = 0; i < string.length; i++) {
        if (!hashmap[string[i]]) hashmap[string[i]] = i;
        else delete hashmap[string[i]];
    };
    for (let char in hashmap) {
        index = Math.min(index, hashmap[char]);
    };
    return index;
};

console.log(firstNonRepeatingCharacter("abcdcaf")); // 1