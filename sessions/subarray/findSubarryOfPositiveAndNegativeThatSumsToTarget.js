// Given an array of integers, both negative and positive, find a contiguous subarray that sums to a number X. 
// Return the start and end indices.
// Example: array = [2, 4, -2, 1, -3, 5, -3], X = 5 -> Result is [2, 4, -2, 1], so the answer is [0, 3]


// Note that this problem is for array of both positive and negative integers
// We use prefix sums again here
// this is very similar to findSubarrayThatSumsToZero
function findSubarray(arr, target) {
    let sum = 0, mapOfSums = {};
    for (let ii = 0; ii < arr.length; ii++) {
        sum += arr[ii];
        if (sum === target) {
            return [0, ii];
        }

        if (mapOfSums[sum - target] !== undefined) {
            return [mapOfSums[sum - target] + 1, ii];
        }

        mapOfSums[sum] = ii;
    }

    return null;
}