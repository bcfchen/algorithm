/*
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
 * 
 * Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
 * 
 * Example 1:
 * 
 * Input: 4
 * Output: 2
 * Example 2:
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */
// say x = 8
var mySqrt = function(x) {
    if (x === 0) {return 0;}
    
    let left=1,
        right = x-1;
    // 1. left=1, right=7  2. left=1, right=4   3. left=2, right=4   4. exit loop since left=2 and right=3
    while (left+1 < right){
        let mid = parseInt((right + left)/2); // 1. mid is now 4.  2. mid is now 2.   3. mid is now 3
        let midSquare = mid * mid; // 1. midSquare = 16   2. midSquare = 4   3. midSquare = 9
        if (midSquare <= x){
            left = mid; // 2. left = 2   
        } else {
            right = mid; // now left=1 and right=4   3. right is now 3
        }
    }
    
    // return 2
    return left;
};