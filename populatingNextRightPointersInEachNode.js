/*
 * Given a binary tree
 * 
 * struct TreeLinkNode {
 *   TreeLinkNode *left;
 *   TreeLinkNode *right;
 *   TreeLinkNode *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * 
 * Initially, all next pointers are set to NULL.
 * 
 * Note:
 * 
 * You may only use constant extra space.
 * Recursive approach is fine, implicit stack space does not count as extra space for this problem.
 * You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
 * Example:
 * 
 * Given the following perfect binary tree,
 * 
 *      1
 *    /  \
 *   2    3
 *  / \  / \
 * 4  5  6  7
 * After calling your function, the tree should look like:
 * 
 *      1 -> NULL
 *    /  \
 *   2 -> 3 -> NULL
 *  / \  / \
 * 4->5->6->7 -> NULL
*/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) { 
      return;
    }

    if (root.left){
      root.left.next = root.right;
    }

    // using example from above, think about the node for (5). it does not have anything to the right of it but
    // it needs to be connected to (6). to do this, when we're processing node (2), we have access to node (2)'s "next", which is
    // node (3). we'll point (5) at (3)'s left, which is (6). 
    if (root.right){
        root.right.next = root.next ? root.next.left : null;
    }

    connect(root.left);
    connect(root.right);
};