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
var diameterOfBinaryTree = function (root) {
    if (!root) { return 0; }
    let globalMaxLength = 0;


    function traverse(currentNode) {
        if (!currentNode) { return 0; }
        const leftLength = traverse(currentNode.left);
        const rightLength = traverse(currentNode.right);

        const currentDiameter = leftLength + rightLength;
        globalMaxLength = Math.max(currentDiameter, globalMaxLength);

        return Math.max(leftLength, rightLength) + 1;
    }

    traverse(root);
    return globalMaxLength;
}
