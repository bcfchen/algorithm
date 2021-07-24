// Find the subarray with the maximum sum
// Output the sum value

// Example: [-2, -3, 4, -1, -2, 1, 5, -1] 
// Answer is: 7. This is the sum of  [4, -1, -2, 1, 5] 

// The basic logic here is maxSum[ii] = Math.max(maxSum[ii-1] + arr[ii], arr[ii])

function findSubarrayMaxSum(arr) {
    let globalMaxSum = arr[0];
    let maxSumAtIndex = arr[0];
    for (let ii = 0; ii < arr.length; ii++) {
        maxSumAtIndex = Math.max(maxSumAtIndex + arr[ii], arr[ii]);
        globalMaxSum = Math.max(globalMaxSum, maxSumAtIndex);
    }

    return globalMaxSum;
}

// this should print 7
console.log(findSubarrayMaxSum([-2, -3, 4, -1, -2, 1, 5, -1]));