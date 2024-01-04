// Write a function that, given a string, returns its longest palindromic substring.

// A palindrome is defined as a string that's written the same forward and  backward. Note that single-character strings are palindromes.

// You can assume that there will only be one longest palindromic substring.

// Sample Input:
// string = "abaxyzzyxf"

// Sample Output:
// "xyzzyx"

const isPalindrome = (string) => {
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        if (string[left] === string[right]) {
            left++;
            right--;
        } else return false;
    };
    return true;
};

const longestPalindromicSubstring = (string) => {
    // longest palindrome
    // longest length
    // iterate string
        // iterate for substring
        // substring = 
        // if substring is palindrome && > longest palindrome length
            // longest palindrome length = substring
    // return substring
};

console.log("abaxyzzyxf"); // "xyzzyx"