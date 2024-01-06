// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

// Your function should return a list of anagram groups in no particular order.

// Sample Input:
// words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// Sample Output:
// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

const groupAnagrams = (words) => {
    // create an array of objects for every word\
    // let result
    // iterate our array of objects
        // let group with current element
        // compare our current obj to all to other objs by iterating
            // if its a match
                // push to group
                // splice out what we pushed
    // return result
};

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]));