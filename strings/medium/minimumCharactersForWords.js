// Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don't need to be in any particular order.

// For example, the characters ["y", "r", "o", "u"] are needed to form the words ["your", "you", "or", "yo"]. 

// Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.

// Sample Input: 
// words = ['this', 'that', 'did', 'deed', 'them!', 'a']

// Sample Output: 
// ['t', 't', 'h', 'i', 's', 'a', 'd', 'd', 'e', 'e', 'm', '!'];

const minimumCharactersForWords = (words) => {
    let resultHashmap = {};
    let result = [];
    for (let word of words) {
        let currentHashmap = {};
        for (let letter of word) {
            if (!currentHashmap[letter]) {
                currentHashmap[letter] = 1;
            } else currentHashmap[letter]++;

            if (!resultHashmap[letter]) {
                resultHashmap[letter] = 1;
                result.push(letter);
            }

            if (currentHashmap[letter] > resultHashmap[letter]) {
                result.push(letter);
                resultHashmap[letter] = currentHashmap[letter];
            }
        }
    }
    return result;
}

console.log(minimumCharactersForWords(['this', 'that', 'did', 'deed', 'them!', 'a']));
// ['t', 't', 'h', 'i', 's', 'a', 'd', 'd', 'e', 'e', 'm', '!'];