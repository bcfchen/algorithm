/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxPathSum = function (root) {

    let globalMaxPathSum = -Infinity;
    function maxContrib(currentNode) {
        if (!currentNode) { return 0; }
        const leftNodeContrib = Math.max(maxContrib(currentNode.left), 0);
        const rightNodeContrib = Math.max(maxContrib(currentNode.right), 0);

        const maxPathSum = leftNodeContrib + rightNodeContrib + currentNode.val;
        globalMaxPathSum = Math.max(globalMaxPathSum, maxPathSum);

        // return contribution of current node
        return currentNode.val + Math.max(leftNodeContrib, rightNodeContrib);
    }

    maxContrib(root);

    return globalMaxPathSum;
}
