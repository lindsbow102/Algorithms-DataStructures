// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Regex solution
const vowels = str => {
    const matches = str.match(/[aeiou]/gi); // 'g' makes sure we don't stop at the first match we find, 'i' stands for case-insensitive
    return matches ? matches.length : 0;  // matches will either return an array or null.  If null, this ensures it returns 0
};

module.exports = vowels;

// Iterative solution
// const vowels = str => {
//     let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for(let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
