// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Option 3 -- still trying to make sense of this one
const reverse = (str) => {
    
        let reversed = '';    
        for (let character of str) {
            reversed = character + reversed;
        }    
        return reversed;
    };

module.exports = reverse;

//Option 1
// const reverse = (str) => {
//     return str.split('').reverse().join('');
// };

//Option 2 -- more modern using backticks
// const reverse = str => {
//     return str.split``.reverse().join``;
//   };

//Option 3 -- still trying to make sense of this one
// const reverse = (str) => {
    //     let reversed = '';    
    //     for (let character of str) {
    //         reversed = character + reversed;
    //     }    
    //     return reversed;
    // };

//Option 4
//     const reverse = (str) => (
//     str.split``.reduce((reversed, character) => character + reversed, '')
// );
