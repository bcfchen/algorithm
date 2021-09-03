/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let lowIndex = 0, highIndex = nums.length - 1, currentIndex = 0;

    while (currentIndex <= highIndex) {
        if (nums[currentIndex] < 1) {
            [nums[currentIndex], nums[lowIndex]] = [nums[lowIndex], nums[currentIndex]];
            lowIndex++;
            currentIndex++;
        } else if (nums[currentIndex] > 1) {
            [nums[currentIndex], nums[highIndex]] = [nums[highIndex], nums[currentIndex]];
            highIndex--;
        } else {
            currentIndex++;
        }
    }

};