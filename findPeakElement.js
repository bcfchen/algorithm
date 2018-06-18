/*
 * A peak element is an element that is greater than its neighbors.
 * 
 * Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
 * 
 * The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 * 
 * You may imagine that nums[-1] = nums[n] = -∞.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,1]
 * Output: 2
 * Explanation: 3 is a peak element and your function should return the index number 2.
 * Example 2:
 * 
 * Input: nums = [1,2,1,3,5,6,4]
 * Output: 1 or 5 
 * Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    return traverse(0, nums.length-1, nums);
};

function traverse(leftIndex, rightIndex, nums){
    // at this point it means the solution has converged, so return the index
    if (leftIndex === rightIndex) { return leftIndex;}
    
    let midIndex = Math.floor((leftIndex + rightIndex)/2);
    // check if at midIndex, the right side of your array satisfies the condition (ex. in [....3, 2], 3 > 2)
    // if right side satisfies, then go check left side, so left is still leftIndex and right is now midIndex
    if (nums[midIndex] > nums[midIndex+1]) {return traverse(leftIndex, midIndex, nums)}
    // else check right side of your array
    return traverse(midIndex+1, rightIndex, nums);
}