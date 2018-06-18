/*
 * Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * 
 * Note: You are not suppose to use the library's sort function for this problem.
 * 
 * Example:
 * 
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let currentIndex = 0,
        zeroIndex = 0,
        twoIndex = nums.length-1;
    
    while(currentIndex <= twoIndex){
        if (nums[currentIndex] === 0){
            // swap current element with the element at zeroIndex, since that's where we want the highest zero to be
            [nums[currentIndex], nums[zeroIndex]] = [nums[zeroIndex], nums[currentIndex]];
            currentIndex++;
            zeroIndex++;
        } else if (nums[currentIndex] === 1){
            // all we need to do is deal with the 0s and 2s. we dont do anything with this one, just increment our currentIndex
            currentIndex++;
        } else if (nums[currentIndex] === 2){
            // swap out element at currentIndex with the element at twoIndex, since that's where we want the lowest two to be
            // no need to increment currentIndex, since whatever value (unknow at this point still) that was at twoIndex before is now at 
            // currentIndex, so we still need to evaluate that one (need to run thru currentIndex again)
            [nums[currentIndex], nums[twoIndex]] = [nums[twoIndex], nums[currentIndex]];
            twoIndex--;
        }
    }
    
};