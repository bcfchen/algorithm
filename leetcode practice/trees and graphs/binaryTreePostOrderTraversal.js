/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function postorderTraversal(root) {
    if (!root) { return []; }
    const results = [];

    const q = [root];
    while (q.length > 0) {
        const currentNode = q.pop();
        results.push(currentNode.val);

        if (currentNode.left) {
            q.push(currentNode.left);
        }

        if (currentNode.right) {
            q.push(currentNode.right);
        }
    }

    return results.reverse();
}