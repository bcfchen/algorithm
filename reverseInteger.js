/*
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * Input: 123
 * Output: 321
 * Example 2:
 * 
 * Input: -123
 * Output: -321
 * Example 3:
 * 
 * Input: 120
 * Output: 21
 * Note:
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [ * −231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer  * overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let isPositive = Math.sign(x) > 0;
    x = Math.abs(x);
    let nums = x.toString().split("");
    let powerOfTen = 0;
    
    for(num of nums){
        reversed += num * Math.pow(10, powerOfTen);
        powerOfTen++;
    }
    
    reversed = isPositive ? reversed : -reversed;
    
    if (reversed > Math.pow(2, 31)-1 || reversed < -Math.pow(2, 31)){
        return 0;
    }
    
    return reversed;
};