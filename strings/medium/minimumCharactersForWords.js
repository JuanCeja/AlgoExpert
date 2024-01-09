// Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don't need to be in any particular order.

// For example, the characters ["y", "r", "o", "u"] are needed to form the words ["your", "you", "or", "yo"]. 

// Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.

// Sample Input: 
// words = ['this', 'that', 'did', 'deed', 'them!', 'a']

// Sample Output: 
// ['t', 't', 'h', 'i', 's', 'a', 'd', 'd', 'e', 'e', 'm', '!'];

const minimumCharactersForWords = (words) => {
    // resultHashmap
    // iterate our words
        // currentHashmap
        // iterate our word
        // if the letter does not exist in the resultHashmap add it and push it to the array
        // add it to our currentHashmap
        // if the letter in current > result
            // push letter to the array and update result
    // return result
}

console.log(minimumCharactersForWords(['this', 'that', 'did', 'deed', 'them!', 'a']));
// ['t', 't', 'h', 'i', 's', 'a', 'd', 'd', 'e', 'e', 'm', '!'];