/*
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * Input: [1,null,2,3]
 *    1
 *     \
 *      2
 *     /
 *    3
 * 
 * Output: [1,3,2]
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
 * @return {number[]}
 */

/* in order traversal is always left -> root -> right at each node, so 
 * in this case it'll need to be empty -> 1 -> 3 -> 2 -> empty
*/
var inorderTraversal = function(root) {
    let values = [];
    
    function traverse(node){
        if (!node) { return; }
        // traverse into left first. in that instance of "traverse" that'll traverse left too
        // until it reaches the bottom node on the left and print it out
        traverse(node.left);
        // print out current root node value
        values.push(node.val);
        traverse(node.right)
    }
    
    traverse(root);
    return values;
};
