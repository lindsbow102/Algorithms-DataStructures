// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) { // Use 'for 'of'' to iterate through STRINGS or ARRAYS
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) { // Use 'for 'in'' to iterate through OBJECTS
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        } 
    }
    return maxChar;
};

module.exports = maxChar;
