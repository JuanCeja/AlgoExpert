// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

// sample input: abcdcba
// sample output: true

const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else return false;
    };
    return true;
};

console.log(isPalindrome('abcdcba')) // true
console.log(isPalindrome('racecar')) // true