/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
    let lowIndex = 0, highIndex = arr.length - 1;

    // check if array is not rotated
    if (arr[0] <= arr[arr.length - 1]) {
        return arr[0];
    }

    while (lowIndex <= highIndex) {
        const midIndex = Math.floor((lowIndex + highIndex) / 2);

        // is midIndex the min? 
        if (arr[midIndex] <= arr[arr.length - 1] && arr[midIndex] < arr[midIndex - 1]) {
            return arr[midIndex];
        }

        if (arr[midIndex] < arr[arr.length - 1]) {
            highIndex = midIndex - 1;
        } else if (arr[midIndex] > arr[arr.length - 1]) {
            lowIndex = midIndex + 1;
        }
    }

    return -1;
}
