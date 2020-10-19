Given an input string , reverse the string word by word. 

Example:

Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
Note: 

A word is defined as a sequence of non-space characters.
The input string does not contain leading or trailing spaces.
The words are always separated by a single space.
Follow up: Could you do it in-place without allocating extra space?

Solution:

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function(str) {
    if (!str || str.length === 0){
        return;
    }
    
    reverse(str, 0, str.length-1);
    var ii = 0;
    var jj = 0;
    
    while(jj < str.length) {
        if (str[jj+1] === ' ' || jj === str.length-1){
            reverse(str, ii, jj);
            ii = jj + 2;
        }
        
        jj++;
    }
};

function reverse(arr, lowIndex, highIndex) {
    while(lowIndex < highIndex){
        const temp = arr[lowIndex];
        arr[lowIndex++] = arr[highIndex];
        arr[highIndex--] = temp;
    }
}