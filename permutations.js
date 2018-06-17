/* 
 * Given a collection of distinct integers, return all possible permutations.
 * Example:
 * Input: [1,2,3]
 * Output:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
*/

/*
 * Notes: using the example above, first we look at 1 and think of it as a prefix. with that prefix we then have remaining
 * numbers 2 and 3. this could either give us (2, 3) or (3, 2). 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums || nums.length === 0){ return nums;}
    let results = [],
        currentArr = [],
        currentNum = nums[0];
    traverse(nums, currentArr, results);
    
    return results;
};

function traverse(nums, currentArr, results){
    // if we've reached the end, then we know that this is a combination that we should add to results
    if (nums.length === 0){
        results.push(currentArr);
    }
    
    // loop through 1, 2, 3
    for(num of nums){ // say num is 1
        let remainingNums = nums.filter(elem => elem !== num); // remaining numbers would be 2 and 3
        // call itself with remainingNums=[2, 3] and a copy of currentArr + num and the results array to augment
        traverse(remainingNums, [...currentArr, num], results); 
    }
}