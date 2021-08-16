var connect = function (currentNode) {
    if (!currentNode) { return currentNode; }

    if (currentNode.left) {
        currentNode.left.next = currentNode.right;
    }

    if (currentNode.right) {
        currentNode.right.next = currentNode.next ? currentNode.next.left : null;
    }

    connect(currentNode.left);
    connect(currentNode.right);

    return currentNode;
}
