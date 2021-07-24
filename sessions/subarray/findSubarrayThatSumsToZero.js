// Find a subarray that sums to 0
// The array can contain both positive and negative integers
// Example: [2, 4, -2, 1, -3, 5, -3]
// Answer: [4, -2, 1, -3]

// for this problem, we use prefix sums
function findSubarrayThatSumsToZero(arr) {
    let sum = 0, mapOfSum = {};
    for (let ii = 0; ii < arr.length; ii++) {
        sum += arr[ii];

        if (sum === 0) {
            return [0, ii];
        }

        if (mapOfSum[sum] !== undefined) {
            return [mapOfSum[sum] + 1, ii]
        }

        mapOfSum[sum] = ii;
    }

    return null;
}

// this should return [0, 4]
console.log(findSubarrayThatSumsToZero([-1, 2, 1, -4, 2, 3, -1, 2]));