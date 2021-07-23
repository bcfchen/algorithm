// Rotate an array by X items
// For example:
// A = [1,2,3,4,5,6] and X = 2, Result = [5,6,1,2,3,4]
// Note that X could be greater than the length of the array

/*
** The logic here is:
** 1. Get X % arr.length, in case X is longer than arr
** 2. reverse the whole array
** 3. reverse the first X items
** 4. reverse the rest of the array 
*/
function rotateArray(arr, x) {
    x = x % arr.length;
    reverseArr(arr, 0, arr.length - 1);
    reverseArr(arr, 0, x - 1);
    reverseArr(arr, x, arr.length - 1);

    return arr;
}

function reverseArr(arr, startIndex, endIndex) {
    while (startIndex < endIndex) {
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
        startIndex++;
        endIndex--;
    }
}

// should print [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 2));