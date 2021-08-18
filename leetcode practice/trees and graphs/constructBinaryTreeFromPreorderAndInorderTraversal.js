/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorderArr, inorderArr) {
    let preorderIndex = 0;

    const inorderMap = {};
    for (let ii = 0; ii < inorderArr.length; ii++) {
        inorderMap[inorderArr[ii]] = ii;
    }

    function traverse(preorderArr, inorderArr, inorderStart, inorderEnd) {
        if (inorderStart > inorderEnd) { return null; }

        // get current node value from preorderArr
        const currentNodeVal = preorderArr[preorderIndex];
        preorderIndex++;
        const currentNode = new TreeNode(currentNodeVal);

        const inorderNodeIndex = inorderMap[currentNodeVal];

        currentNode.left = traverse(preorderArr, inorderArr, inorderStart, inorderNodeIndex - 1);
        currentNode.right = traverse(preorderArr, inorderArr, inorderNodeIndex + 1, inorderEnd);

        return currentNode;
    }


    const root = traverse(preorderArr, inorderArr, 0, inorderArr.length - 1);
    return root;
};
