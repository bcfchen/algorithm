/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) { return []; }

    const levelsArr = [];
    traverse(root, levelsArr, 0);
    return levelsArr;
}

function traverse(currentNode, levelsArr, currentLevel) {
    if (!currentNode) { return; }
    if (!levelsArr[currentLevel]) {
        levelsArr[currentLevel] = [];
    }

    levelsArr[currentLevel].push(currentNode.val);
    traverse(currentNode.left, levelsArr, currentLevel + 1);
    traverse(currentNode.right, levelsArr, currentLevel + 1);
}
