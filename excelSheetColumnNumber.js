/*
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * 
 * For example:
 * 
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *     AB -> 28 
 *     ...
 * Example 1:
 * 
 * Input: "A"
 * Output: 1
 * Example 2:
 * 
 * Input: "AB"
 * Output: 28
 * Example 3:
 * 
 * Input: "ZY"
 * Output: 701
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let numOfChars = s.length,
        counter = 0,
        sum = 0;
    // iterate over "ZY". first we look at Y which is 25, and add it to sum.
    // then we look at Z (tenth digit) which is 26, so we do 26 x 26^1 and add it to sum
    for(let ii=numOfChars-1;ii>=0;ii--){
        let currentChar = s[ii];
        let numForChar = characterToNumber(currentChar);
        sum += numForChar * Math.pow(26, counter);
        counter++;
    }
    
    return sum;
};

// convert char to number. for reference charcode of A is 65 and charCode of Z is 90
// so to convert char to number we get the difference and plus 1
function characterToNumber(char){
    let charCodeOfA = "A".charCodeAt(0);
    let charCodeOfChar = char.charCodeAt(0);
    return charCodeOfChar - charCodeOfA + 1;
}