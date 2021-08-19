var cloneGraph = function (node) {
    if (!node) { return null; }
    const clonedMap = {};
    const clonedNode = traverse(node, clonedMap);

    return clonedNode;
};

function traverse(originalNode, clonedMap) {
    if (clonedMap[originalNode.val]) {
        return clonedMap[originalNode.val];
    }

    const clonedNode = new Node(originalNode.val);
    clonedMap[originalNode.val] = clonedNode;

    for (let ii = 0; ii < originalNode.neighbors.length; ii++) {
        const neighborNode = originalNode.neighbors[ii];
        const clonedNeighbor = traverse(neighborNode, clonedMap);
        clonedNode.neighbors.push(clonedNeighbor);
    }

    return clonedNode;
}