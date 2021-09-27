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
 * @return {number}
 */

function countUnivalSubtrees(root) {
    let counter = 0;

    if (!root) { return 0; }

    function helper(node) {
        if (!node.left && !node.right) {
            counter++;
            return true;
        }

        const leftValid = !node.left || (helper(node.left) && node.left.val === node.val);
        const rightValid = !node.right || (helper(node.right) && node.right.val === node.val);

        if (leftValid && rightValid) {
            counter++;
            return true;
        }

        return false;
    }

    helper(root);

    return counter;
}