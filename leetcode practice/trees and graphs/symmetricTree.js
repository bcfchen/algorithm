/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) {
        return true;
    }

    return areNodesSymmetric(root, root);
}

function areNodesSymmetric(nodeA, nodeB) {
    if (!nodeA && !nodeB) { return true; }
    if (!nodeA || !nodeB) { return false; }

    return nodeA.val === nodeB.val
        && areNodesSymmetric(nodeA.left, nodeB.right)
        && areNodesSymmetric(nodeA.right, nodeB.left);
}
