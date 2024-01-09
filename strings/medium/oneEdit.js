// You're given two strings stringOne and stringTwo. Write a function that determines if these two strings can be made equal using only one edit.

// There are 3 possible edits:

// Replace: One character in one string is swapped for a different character.
// Add: One character is added at any index in one string.
// Remove: One character is removed at any index in one string.Add

// Note that both strings will contain at least one character. If the strings are the same, your function should return true.

// Sample Input: 
// stringOne = 'hello'
// stringTwo = 'hollo'

// Sample Output: True -- A single replace at index 1 of either string can make the strings equal

const oneEdit = (stringOne, stringTwo) => {
    if(Math.abs(stringOne.length - stringTwo.length) >= 2) return false;

    // differences counter
    // if string lengths are diff increase counter
    // iterate both strings
        // if elements are different increase counter
    // return if differences are > 1 false <= 1 true
}

console.log(oneEdit('hello', 'hollo')); // true