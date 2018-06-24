/*
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by  * level).
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its level order traversal as:
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) { return [];}
    
    let masterArr = [];
    function traverse(node, level, masterArr){
        if (!node) { return;}
        
        masterArr[level] = masterArr[level] ? masterArr[level] : [];        
        masterArr[level].push(node.val);
        traverse(node.left, level+1, masterArr);
        traverse(node.right, level+1, masterArr);
    }
    
    traverse(root, 0, masterArr);
    return masterArr;
};