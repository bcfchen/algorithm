/*
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its zigzag level order traversal as:
 * [
 *   [3],
 *   [20,9],
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
var zigzagLevelOrder = function(root) {
    let values = [], level = 0;
    traverse(root, level, values);
    return values;
};


function traverse(node, level, values){
    if (!node) { return; }
    // if array for current level desn't exist, then give it empty array
    if (!values[level]) { values[level] = []};
    
    // level % 2 means it's an odd level (1, 3, 5 etc). in this case
    // we want to add value to front of current level's array, like 
    // the level of 15 and 7 in our example would be [15, 7]
    if (level % 2){
        values[level].unshift(node.val);
    } else {
        // if level % 2 === 0 it means it's an even number level like 2, 4, 6
        // in this case we want to add value to end of array, like in the case of 
        // 9 , 20 it needs to be [20, 9]
        values[level].push(node.val);
    }
    
    // look left first then look right
    traverse(node.left, level+1, values);
    traverse(node.right, level+1, values);

}