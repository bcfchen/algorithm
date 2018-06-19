
/*
 * Given an integer n, return the number of trailing zeroes in n!.
 * 
 * Example 1:
 * 
 * Input: 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * Example 2:
 * 
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 * Note: Your solution should be in logarithmic time complexity.
*/
/**
 * @param {number} n
 * @return {number}
 */

/* the solution is to count the number of 5s 
 * n = 5: There is one 5 and 3 2s in prime factors of 5! (2 * 2 * 2 * 3 * 5). So count of trailing 0s is 1.
 *
 * n = 11: There are two 5s and three 2s in prime factors of 11! (2 8 * 34 * 52 * 7). So count of trailing 0s is 2.
*/
var trailingZeroes = function(n) {
    if (n < 0){ return -1; }
    
    let count = 0,
        remainingVal = n;
    while(remainingVal>=5){
        let dividedByFive = parseInt(remainingVal/5);
        count += dividedByFive;
        remainingVal = dividedByFive;
    }
    
    return count;
};