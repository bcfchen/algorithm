/*
 * Given a set of distinct integers, nums, return all possible subsets (the power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * Input: nums = [1,2,3]
 * Output:
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = [];
    let arrayWithPrefix = [],
        forPrefix = [];
    // say nums = [1,2,3,4]
    traverse(nums, 0, results, forPrefix);
    return results;
};

// let's walk through this for first loop
function traverse(nums, startingIndex, results, forPrefix){
    // take a copy of forPrefix and store in results array
    results.push([...forPrefix]); // loop 1: results is [[]]
    // loop through [1,2,3,4]
    for(let ii=startingIndex;ii<nums.length;ii++){
        // let's walkthrough first loop, num=2
        forPrefix.push(nums[ii]); // forPrefix is now [1]. this statement is responsible for producing [1], [1,2], [1, 3], [1, 4], then for loop 2 it'll be [2], [2, 3], [2, 4]. each of those will be added to "results" in the next line when it gets to line 17
        traverse(nums, ii+1, results, forPrefix); 
        forPrefix.pop(); // forPrefix is now []
    }
}