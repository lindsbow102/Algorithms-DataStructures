// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
    const newArr = [];
    let i = 0; // index
    
    while(i < array.length) {
        newArr.push(array.slice(i, i + size));
        i += size;
    }

    return newArr;
};

module.exports = chunk;

// Option 1
// const chunk = (array, size) => {
//     const newArr = [];
    
//     for (let element of array) {
//         const last = newArr[newArr.length - 1];
//         // if last element does not exist or if its length is equal to the chunk size
//         if (!last || last.length === size) {
//             newArr.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return newArr;
// };
