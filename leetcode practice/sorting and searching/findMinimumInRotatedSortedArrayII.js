/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let leftIndex = 0, rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (nums[midIndex] > nums[rightIndex]) {
            leftIndex = midIndex + 1;
        } else if (nums[midIndex] < nums[rightIndex]) {
            rightIndex = midIndex;
        } else {
            rightIndex--;
        }
    }

    return nums[leftIndex];
};