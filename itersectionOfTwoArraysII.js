/*
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 * 
 * Note:
 * Each element in the result should appear as many times as it shows in both arrays.
 * The result can be in any order.
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
 * iterate through nums1, generate map of num vs count like {1: 2, 2: 4}
 * iterate through nums2, generate map of num vs count like {1: 2, 2: 4}
 * iterate through smaller of nums1 map vs nums2 map, match the key with other map, compare whose value       * (count) is smaller and push that to array
 */
var intersect = function(nums1, nums2) {
    let numToCount1 = {};
    nums1.forEach(num => {
        numToCount1[num] = numToCount1[num] ? numToCount1[num] + 1 : 1;
    });
    
    let numToCount2 = {};
    nums2.forEach(num => {
        numToCount2[num] = numToCount2[num] ? numToCount2[num] + 1 : 1;
    });
    
    
    let intersections = [];
    for(key of Object.keys(numToCount1)){
        if (numToCount2[key]) {
            while(numToCount2[key] > 0 && numToCount1[key] > 0){
                numToCount2[key]--;
                numToCount1[key]--;
                intersections.push(parseInt(key));   
            }
        }
    }
    
    return intersections;
};