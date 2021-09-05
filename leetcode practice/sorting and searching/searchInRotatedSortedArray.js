/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftIndex = 0, rightIndex = nums.length - 1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (nums[midIndex] === target) {
            return midIndex;
        } else if (nums[midIndex] >= nums[0]) { // we're in left half
            if (target >= nums[0] && target < nums[midIndex]) {
                rightIndex = midIndex - 1;
            } else {
                leftIndex = midIndex + 1;
            }
        } else {
            if (target <= nums[nums.length - 1] && target > nums[midIndex]) {
                leftIndex = midIndex + 1;
            } else {
                rightIndex = midIndex - 1;
            }
        }
    }

    return -1;
};