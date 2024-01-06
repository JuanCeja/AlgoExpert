// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

// Your function should return a list of anagram groups in no particular order.

// Sample Input:
// words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// Sample Output:
// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

const groupAnagrams = (words) => {
    let hashmap = {};
    let result = [];
    let sortedArrayOfWords = words.map(word => word.split('').sort().join(''));

    for (let i = 0; i < words.length; i++) {
        if (!hashmap[sortedArrayOfWords[i]]) hashmap[sortedArrayOfWords[i]] = [words[i]];
        else hashmap[sortedArrayOfWords[i]].push(words[i]);
    }

    for (let key in hashmap) {
        result.push(hashmap[key]);
    }

    return result;
};

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])); // [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]