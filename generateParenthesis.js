/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let results = [];
    traverse(n, n, "", results);
    return results;
};

function traverse(leftRemaining, rightRemaining, currentStr, results) {
    
    // skip out from current path if you've currently printed more ")"s than "("'s. this probably looks like 
    // "())" or "))(". there is no way to recover from this to form a valid parenthesis!
    if (leftRemaining > rightRemaining){return;}
    
    // if you've successfully used up all parenthesis on left and right without triggering the above condition, then
    // this means string is legit so add it to results array
    if (leftRemaining===0 && rightRemaining===0){results.push(currentStr);}
    
    if (leftRemaining > 0){
        traverse(leftRemaining-1, rightRemaining, currentStr + "(", results);
    }
    if (rightRemaining > 0){
        traverse(leftRemaining, rightRemaining-1, currentStr + ")", results);
    }
}