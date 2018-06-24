/*
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is  * valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * Input: "()"
 * Output: true
 * Example 2:
 * 
 * Input: "()[]{}"
 * Output: true
 * Example 3:
 * 
 * Input: "(]"
 * Output: false
 * Example 4:
 * 
 * Input: "([)]"
 * Output: false
 * Example 5:
 * 
 * Input: "{[]}"
 * Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true;
    if (s.length % 2 !== 0) return false;
    
    let map = {"}": "{", "]": "[", ")": "("};
    let stack = [];
    for(let ii=0;ii<s.length;ii++){
        let char = s[ii];
        // if char is in map, it means it is ), }, or ]
        if (map[char]){
            let tailOpenChar = stack.pop();
            if (tailOpenChar !== map[char]){
                return false;
            }
        } else {
            // if char is not in map it means it is (, [, or {
            stack.push(char);
        }
        
    }

    /* if all chars have been iterated over, the stack should've been empty, since everytime a 
     * perenthesis is closed the stack is popped. if the stack is not empty it means ther are              * perenthesis that are not closed, i.e. "(("
    */
    return stack.length === 0;
};