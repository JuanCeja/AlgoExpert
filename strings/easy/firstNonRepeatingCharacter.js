// // Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

// // The first non-repeating character is the first character in a string that occurs only once.

// // If the input string doesn't have any non-repeating characters, your function should return -1.

// Sample Input:
// string = "abcdcaf"

// Sample Output: 1 // The first non-repeating characters is "b" and is found at index 1

const firstNonRepeatingCharacter = (string) => {
    let hashmap = {};
    for (let s of string) {
        if (!hashmap[s]) hashmap[s] = 1;
        else hashmap[s]++;
    };

    for (let i = 0; i < string.length; i++) {
        if (hashmap[string[i]] === 1) return i;
    };
    return -1;
};

console.log(firstNonRepeatingCharacter("abcdcaf")); // 1