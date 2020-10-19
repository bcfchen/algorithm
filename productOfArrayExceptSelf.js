
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

Solution:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var before = [];
    var after = [];
    var output = [];
    
    // build before array
    before[0] = 1; // this is default -- though there's nothing to the left of nums[0], we need a 1 to be there at before[0] to multiple to after[0]
    for(let ii=1;ii<nums.length;ii++){
        before[ii] = before[ii-1] * nums[ii-1];
    }
    
    // build after array
    after[nums.length-1] = 1; // same deal as before array, but the reverse
    for(let ii=nums.length-2;ii>=0;ii--){
        after[ii] = after[ii+1] * nums[ii+1];
    }
    
    for(let ii=0;ii<nums.length;ii++){
        output[ii] = before[ii] * after[ii];
    }
    
    return output;
};