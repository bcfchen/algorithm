/*
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * Note:
 * 
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements  * from nums2.
 * Example:
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/* the approach is to start filling in nums1 from the back, since the last few elements are not initialized. 
using the example from above, we know that the relevant arrays are basically [1, 2, 3] and [2, 5, 6]. 
we'll start from the back of both of these (i.e. values 3 and 6), diff them, 
and put the bigger one in the back of nums1 in an element that is not yet initialized. keep doing this 
*/
var merge = function(nums1, m, nums2, n) {
    let nums1WithVals = nums1.slice(0, m);
    let lastIndexOfNums1 = m + n - 1,
        lastIndexOfNums1WithVals = m - 1,
        lastIndexOfNums2 = n - 1;
    let currentNums1Index = lastIndexOfNums1WithVals,
        currentNums2Index = lastIndexOfNums2,
        num1IndexToFill = lastIndexOfNums1;
    
    // continue doing this as long as one of the arrays still have value. basically need to do this
    // to re-fill in "every" element of nums1 even when all of nums2 have been accounted for. like
    // the (1) and (2) of nums1 in our example
    while(currentNums1Index > -1 || currentNums2Index > -1){
        let val1 = nums1[currentNums1Index],
            val2 = nums2[currentNums2Index];
        // obviously if val1 > val2 then put val1 at the current (from the end) index of nums1. 
        // also do this if all of nums2 elements are gone to be consistent
        // move current pointer of nums1 left one element afterwards to process next element
        if(currentNums2Index < 0 || val1 > val2){
            nums1[num1IndexToFill] = val1;
            currentNums1Index--;
        } else {
            nums1[num1IndexToFill] = val2;
            currentNums2Index--;
        }
        
        num1IndexToFill--;
    }
};