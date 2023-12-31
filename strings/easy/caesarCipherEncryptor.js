// Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

// Note that letter should 'wrap' around the alphabet; in other words, the letter Z shifted by one returns the letter A.

// Sample Input:
// string = "xyz"
// key = 2

// Sample Output:
// 'zab'

const caesarCipherEncryptor = (string, key) => {
    let strArr = [];
    for(let i = 0; i < string.length; i++) {
        let charCode = (string.charCodeAt(i) - 97 + key) % 26;
        strArr.push(String.fromCharCode(charCode + 97));
    };
    return strArr.join('');
};

console.log(caesarCipherEncryptor('xyz', 2)); // zab