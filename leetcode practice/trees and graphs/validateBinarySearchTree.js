var isValidBST = function (root) {
    if (!root) { return true; }

    return validateNode(root, Infinity, -Infinity);
}

function validateNode(currentNode, maxValAllowed, minValAllowed) {
    if (!currentNode) { return true; }
    if (currentNode.val >= maxValAllowed || currentNode.val <= minValAllowed) {
        return false;
    }

    return validateNode(currentNode.left, currentNode.val, minValAllowed)
        && validateNode(currentNode.right, maxValAllowed, currentNode.val);
}