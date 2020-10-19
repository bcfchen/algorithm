
/*
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var indices = []; 
    var map = {};
    for(var ii=0;ii<nums.length;ii++){
        var numVal = nums[ii];
        map[numVal] = ii;
    }
    
    for(var kk=0;kk<nums.length;kk++){
        var val = nums[kk];
        var diff = target-val;

        if((map[diff] || map[diff] === 0)){
            if(kk !== map[diff]){
            return [kk, map[diff]];                
            }
        }
    }
};