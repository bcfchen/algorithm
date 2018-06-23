/*
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the  * array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Example 2:
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let hasCarry = false;
    for(let ii=digits.length-1;ii>=0;ii--){
        // handle scenario like [1, 2, 3]
        // when see 3, increment and skip out of loop
        if (digits[ii] !== 9){
            digits[ii]++;
            // if hasCarry=true it must've been set by one of the previous digits
            // sine we've already increment this digit (ex. the "2" in [1, 2, 9] will now become "3"
            // and 9 was already set to 0 in the previous loop), we can set hasCarry to false
            if (hasCarry){
                hasCarry = false;
            }
            break;
        }
        
        // if digit is 9, then make digit 0 and toggle hasCarry to true
        if (digits[ii] === 9){
            digits[ii] = 0;
            hasCarry = true;
        } 
    }
    
    // if hasCarry is still true it means we must've encountered a case like [9, 9].
    // since we've already set the array to [0, 0] at this point we now need to add '1' in front
    if (hasCarry){
        digits.unshift(1);
    }
    
    return digits;
};