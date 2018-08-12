// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//function palindrome(str) {}

const palindrome = str => {
    const reversed = str.toLowerCase().split``.reverse().join``;
    return str === reversed;  // will automatically return true or false
};

palindrome("abba");

module.exports = palindrome;

// Option 1 -- MY solution
// const palindrome = str => {
//     const reversed = str.toLowerCase().split``.reverse().join``;
//     return str === reversed;  // will automatically return true or false
// };

// Option 2
// const palindrome = str => {
//     return str.split``.every((char, index) => {
//         return char === str[str.length - index - 1];  // Index here refers to index of initial char
//     })
// };
