/*
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * For example,
 * Given [1,1,1,2,2,3] and k = 2, return [1,2].
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (!nums || nums.length === 0) {return [];}
    let numToFrequencyMap = {};
    nums.forEach(num => numToFrequencyMap[num] = numToFrequencyMap[num] ? numToFrequencyMap[num]+1 : 1);
    let numsAsKeys = Object.keys(numToFrequencyMap);
    numsAsKeys.sort((numAsKey1, numAsKey2) => numToFrequencyMap[numAsKey2] - numToFrequencyMap[numAsKey1]);
    return numsAsKeys.slice(0, k).map(elem => parseInt(elem));
};