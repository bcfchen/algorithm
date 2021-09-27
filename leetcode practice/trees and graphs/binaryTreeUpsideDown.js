
/*
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }
*/

/**
  * @param {TreeNode} root Root of the input tree.
  * @return {TreeNode} Root of the output tree.
  */

var flipUpsideDown = function (root) {
    if (!root) { return root; }

    function helper(currentNode, prevNode) {
        if (!currentNode) {
            return prevNode;
        }

        prevNode.left_ptr = null;
        const newRootNode = helper(currentNode.left_ptr, currentNode);

        currentNode.right_ptr = prevNode;
        currentNode.left_ptr = prevNode.right_ptr;
        prevNode.right_ptr = null;

        return newRootNode;
    }

    const rootNode = helper(root.left_ptr, root);
    return rootNode;
};
