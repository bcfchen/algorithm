/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let firstIndexOfUniqNum = 0;
    for (let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
        if (nums[firstIndexOfUniqNum] === nums[fastIndex]) { continue; }

        firstIndexOfUniqNum++;
        nums[firstIndexOfUniqNum] = nums[fastIndex];
    }

    return firstIndexOfUniqNum + 1;
}
