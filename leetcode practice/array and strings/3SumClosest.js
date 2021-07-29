/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let closestDiff = Number.MAX_SAFE_INTEGER;
    nums.sort((num1, num2) => num1 - num2);

    for (let ii = 0; ii < nums.length; ii++) {
        let startIndex = ii + 1, endIndex = nums.length - 1;
        while (startIndex < endIndex) {
            const currentSum = nums[ii] + nums[startIndex] + nums[endIndex];
            const currentDiff = target - currentSum;

            if (currentDiff === 0) {
                return currentSum;
            }

            if (Math.abs(currentDiff) < Math.abs(closestDiff)) {
                closestDiff = currentDiff;
            }

            if (currentSum > target) {
                endIndex--;
            } else {
                startIndex++;
            }
        }
    }

    return target - closestDiff;
};