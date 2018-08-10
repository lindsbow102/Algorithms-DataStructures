// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//Option 1
// const reverse = (str) => {
//     return str.split('').reverse().join(''); 
// };

//Option 2 -- more modern using backticks
const reverse = (str) => {
    return str.split``.reverse().join``; 
};

module.exports = reverse;
