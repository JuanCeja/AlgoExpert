// Write a function that, given a string, returns its longest palindromic substring.

// A palindrome is defined as a string that's written the same forward and  backward. Note that single-character strings are palindromes.

// You can assume that there will only be one longest palindromic substring.

// Sample Input:
// string = "abaxyzzyxf"

// Sample Output:
// "xyzzyx"


const longestPalindromicSubstring = (string) => {
<<<<<<< Updated upstream
    let answer = string[0];
    for (let i = 1; i < string.length; i++) {
        let left = i; let right = i;
        while (string[i] === string[right + 1]) {
            right++;
        }
        while (string[left] === string[right] && left >= 0 && right < string.length) {
            let substring = string.slice(left, right + 1);
            if (substring.length > answer.length) {
                answer = substring;
            }
            left--;
            right++;
            
        }
    }
    return answer;
=======

>>>>>>> Stashed changes
};

console.log((longestPalindromicSubstring("abaxyzzyxf"))); // "xyzzyx"









// let answer = string[0];

// for (let i = 1; i < string.length - 1; i++) {
//     if (string[i - 1] === string[i + 1] || string[i] === string[i + 1]) {
//         let left = i; let right = i;

//         while (string[i] === string[right + 1]) {
//             right++;
//         }

//         while (string[left] === string[right] && left >= 0 && right < string.length) {
//             const potentialAnswer = string.slice(left, right + 1);
//             if (potentialAnswer.length > answer.length) {
//                 answer = potentialAnswer;
//             }
//             left--;
//             right++;
//         }
//     }
// }
// return answer;