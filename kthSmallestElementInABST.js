/*
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
 * 
 * Example 1:
 * 
 * Input: root = [3,1,4,null,2], k = 1
 *    3
 *   / \
 *  1   4
 *   \
 *    2
 * Output: 1
 * Example 2:
 * 
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 *        5
 *       / \
 *      3   6
 *     / \
 *    2   4
 *   /
 *  1
 * Output: 3
 * Follow up:
 * What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let allValues = traverse(root)[k-1];
    return allValues;
};

// we basically want to do an in-order traversal in this case
// doing in-order traversal will guarantee that we hit the nodes with increasing order [1, 2, 3, 4...]
function traverse(root){
    if (!root){
        return [];
    }
    
    let leftSideValues = traverse(root.left);
    let rightSideValues = traverse(root.right);
    // in order is left -> root -> right, so add collected values in array in that order
    return [...leftSideValues, root.val, ...rightSideValues];
}