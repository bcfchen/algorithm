
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
    let deltaMap = {};
    let counter = 0;
    // create a map with the delta as key, and stores the index of the current element
    for(num of nums){
        let delta = target - num;
        deltaMap[delta] = {
            val: num,
            index: counter
        }
        counter++;
    }
    
    let counter2 = 0;
    for(num of nums){
        // check if the delta is the same value as the element itself. i.e.
        // target= 6, nums=[3, 2, 4] the num 3 would be problematic since delta=3 and num also is 3
        // in this case we'd want to skip over the 3
        if (deltaMap[num] && counter2 !== deltaMap[num].index){
            // we've found it!
            return [counter2, deltaMap[num].index]    
        }
        
        counter2++;
    }
    
    return [];
};