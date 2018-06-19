/*
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number  * equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 
 * 
 * Input: 19
 * Output: true
 * Explanation: 
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // "repeatingNumberChecker" is a hashmap that stores each incoming value that we check for. this 
    // is to guard against the endless loop (ex. say 101 is a number that will never lead to true, it would loop back to 101 at some point during the endless cycle. this is to skip out if that happens)
    let repeatingNumberChecker = {};
    let result = n;
    
    // only continue looping if repeatingNumberChecker[result] is false, since 
    // we're flagging repeatingNumberChecker[result] to true everytime we process a number "result"
    while(!repeatingNumberChecker[result]){
        if (result === 1){ return true;}
        repeatingNumberChecker[result] = true;
        
        let numAsString = result + "",
            sumForNumber = 0;
        for(let ii=0;ii<numAsString.length;ii++){
            let digit = parseInt(numAsString[ii]);
            sumForNumber += Math.pow(digit, 2);
        }        
        result = sumForNumber;
    }
    
    return false;
};