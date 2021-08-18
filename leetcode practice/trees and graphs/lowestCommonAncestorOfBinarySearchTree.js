var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return root;
    }

    const rootVal = root.val, pVal = p.val, qVal = q.val;

    // are both targets on the left
    if (pVal < rootVal && qVal < rootVal) {
        // if so, look to the left
        return lowestCommonAncestor(root.left, p, q);
    }

    // are both targets on the right
    if (pVal > rootVal && qVal > rootVal) {
        // if so, look to the right
        return lowestCommonAncestor(root.right, p, q);
    }

    // if one on each side of root, then root is LCA!
    return root;
};