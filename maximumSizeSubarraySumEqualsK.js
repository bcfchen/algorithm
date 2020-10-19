Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:

Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4 
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
Example 2:

Input: nums = [-2, -1, 2, 1], k = 1
Output: 2 
Explanation: The subarray [-1, 2] sums to 1 and is the longest.
Follow Up:
Can you do it in O(n) time?

Solution:

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    var map = {};
    var currentSum = 0;
    var maxLength = 0;
    for(var ii=0;ii<nums.length;ii++){
        var currentNum = nums[ii];
        currentSum += currentNum;
        if (currentSum === k){
            maxLength = Math.max(maxLength, ii + 1);
        }
        
        var diff = currentSum - k;
        if (map[currentSum] === undefined){
            map[currentSum] = ii;
        } 
        
        if (map[diff] !== undefined){
            maxLength = Math.max(maxLength, ii-map[diff]);
        }
    }
    
    return maxLength;
};