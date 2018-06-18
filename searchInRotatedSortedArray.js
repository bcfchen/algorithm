/*
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * Example 2:
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || nums.length === 0) {return -1;}
    let leftIndex = 0,
        rightIndex = nums.length-1;
    
    while(leftIndex <= rightIndex){
        let leftVal = nums[leftIndex],
            rightVal = nums[rightIndex];
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = nums[midIndex];
        
        if (midVal === target){
            return midIndex;
        }
        
        // this means it's the correct order, like say [1, 2, 3, 4, 5], 3 >= 1
        if (midVal >= leftVal){
            // if target < midVal (say if target = 2, then 2>= 1 and 2 < 3), then check the left side of midIndex
            if (target >= leftVal && target < midVal){
                rightIndex = midIndex - 1;
            } else {
                leftIndex = midIndex + 1;
            }
        } 
        // if current range is not in correct order, say like [5, 4, 3, 1, 2], 3 <= 5 (leftVal)
        else {
            if (midVal < target && target <= rightVal){
                leftIndex = midIndex + 1;
            } else {
                rightIndex = midIndex - 1;
            }
        }
    }
    
    return -1;
};