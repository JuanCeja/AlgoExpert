// Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order. For example, given the string "tim is great", your function should return "great is tim".

// For this problem, a word can contain special characters, punctuation, and numbers. The words in the string will be separated by one or more whitespaces, and the reversed string must contain the same whitespaces as the original string. For example, given the string "whitespaces    4" you would be expected to return "4    whitespaces".

// Note that you're not allowed to use any built-in split or reverse methods/functions. However, you are allowed to use a built-in join method/function.

// Also note that the input string isn't guranteed to always contain words.

// Sample Input: 
// string = "AlgoExpert is the best!"

// Sample Output: "best! the is AlgoExpert"

const reverseWordsInString = (string) => {
    let wordsArray = [];
    let count = 0;

    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] !== " ") count++;
        else {
            let word = string.slice(i + 1, i + count + 1);
            wordsArray.push(word);
            wordsArray.push(string[i]);
            count = 0;
        }
        if (count > 0 && i === 0) {
            let word = string.slice(i, i + count + 1);
            wordsArray.push(word);
        }
    }
    return wordsArray.join('');
};

console.log(reverseWordsInString("AlgoExpert is the best!"));
// best! the is AlgoExpert"