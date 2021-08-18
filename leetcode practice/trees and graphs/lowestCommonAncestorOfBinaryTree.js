var lowestCommonAncestor = function (root, p, q) {
    if (!root) { return null; }
    if (root === p || root === q) { return root; }

    const nodeFromLeft = lowestCommonAncestor(root.left, p, q);
    const nodeFromRight = lowestCommonAncestor(root.right, p, q);

    if (nodeFromLeft && nodeFromRight) { return root; }
    if (nodeFromLeft) { return nodeFromLeft; }
    if (nodeFromRight) { return nodeFromRight; }

    return null;
}