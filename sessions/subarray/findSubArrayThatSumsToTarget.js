// Find the subarray that sums to a target (elements are all positive)
// Example: [5, 3, 1, 7, 6, 4, 2, 3], target is 14
// Answer: [1, 7, 6] sums up to 14, so the answer is [2, 4]

/*
** Here we use the sliding window
** Note that this problem is only for positive array
*/
function findSubarrayThatSumsToTarget(arr, target) {
    let start = 0, end = 0; sum = arr[0];

    // start can go all the way to the last element of the array
    while (start < arr.length) {
        // at any point, if start passes end, we pull end to be the same index as start
        if (start > end) {
            end = start;
            sum = arr[start];
        }

        if (target === sum) {
            return [start, end];
        } else if (sum < target) {
            // if, by the time your end is at the end of array and sum is still smaller
            // than target, then just return null. at this point your window will only
            // get smaller so there is no hope anymore
            if (end === arr.length - 1) {
                return null;
            }
            end++;
            sum += arr[end];
        } else if (sum > target) {
            sum -= arr[start];
            start++;
        }
    }
}

console.log(findSubarrayThatSumsToTarget([5, 3, 1, 7, 6, 4, 2, 3], 14));
// this prints [2, 4]