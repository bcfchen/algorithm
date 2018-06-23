/*
 * Write a function that takes a string as input and returns the string reversed.
 * 
 * Example:
 * Given s = "hello", return "olleh".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let str = "";
    let arr = s.split("");
    while(arr.length >0){
        str += arr.pop();
    }
    
    return str;
};