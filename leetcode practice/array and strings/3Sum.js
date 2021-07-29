/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    if (!nums) { return []; }
    nums.sort((num1, num2) => num1 - num2);
    const combinations = [];
    for (let pointerIndex = 0; pointerIndex < nums.length - 2; pointerIndex++) {
        if (nums[pointerIndex] > 0 || nums[pointerIndex - 1] === nums[pointerIndex]) {
            continue;
        }

        twoSum(nums, pointerIndex, combinations);
    }

    return combinations;
};

function twoSum(nums, threeSumIndex, combinations) {
    let startIndex = threeSumIndex + 1, endIndex = nums.length - 1;
    while (endIndex > startIndex) {
        const sum = nums[startIndex] + nums[endIndex] + nums[threeSumIndex];
        if (sum < 0) {
            startIndex++;
        } else if (sum > 0) {
            endIndex--;
        } else {
            combinations.push([nums[threeSumIndex], nums[startIndex], nums[endIndex]]);
            startIndex++;
            endIndex--;

            while (startIndex < endIndex && nums[startIndex] === nums[startIndex - 1]) {
                startIndex++;
            }

            while (startIndex < endIndex && nums[endIndex] === nums[endIndex + 1]) {
                endIndex--;
            }
        }
    }
};