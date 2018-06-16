/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. 
 * 
 * Example:
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
// say example input is "23"
var letterCombinations = function(digits) {
    // skip out if digits undefined or empty
    if (!digits || digits.length === 0){return [];}
    
    let results = [],
        counter = 0,
        prefixStr = "";
    generateCombinations(results, prefixStr, counter, digits);
    return results;
};

// "counter" helps us loop through digits "23"
function generateCombinations(results, prefixStr, counter, digits){
    // this means we've gone through all digits provided for this branch, so add generated string to results and return
    if (counter === digits.length) { 
        results.push(prefixStr); 
        return results;
    }
    let digit = digits[counter]; // this returns "abc" or "jkl" ...etc.
    let letters = numberToLetters[digit];
    
    for(char of letters){
        // first loop for digit "2", counter=0, prefixStr += char => "a"
        // first loop for digit "3", counter=1, prefixStr += char => "ad"
        generateCombinations(results, prefixStr + char, counter+1, digits);
    }
};

const numberToLetters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
};
