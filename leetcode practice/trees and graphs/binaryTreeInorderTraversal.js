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
var inorderTraversal = function (root) {
    if (!root) { return []; }
    const printArr = [];
    traverse(root, printArr);
    return printArr;
};

function traverse(currentNode, printArr) {
    if (currentNode.left) {
        traverse(currentNode.left, printArr);
    }
    printArr.push(currentNode.val);

    if (currentNode.right) {
        traverse(currentNode.right, printArr);
    }

    return printArr;
}