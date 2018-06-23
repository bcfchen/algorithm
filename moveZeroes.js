/*
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the  * non-zero elements.
 * 
 * Example:
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let ii=nums.length-1;ii>=0;ii--){
        if (nums[ii] === 0){
            nums.splice(ii, 1);
            nums.push(0);
        }
    }
};