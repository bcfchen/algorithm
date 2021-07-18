function bipartite(graph) {
    // initialize nodes in graph
    for (node in graph.nodes) {
        node.level = -1;
        node.state = 'unvisited';
    }

    const group1 = [];
    const group2 = [];

    for (node in graph.nodes) {
        if (node.state === 'unvisited') {
            const groupNodesObj = getBipartiteGroups(node);
            if (groupNodesObj === null) { return null; }

            group1.push(...groupNodesObj.oddNodes);
            group2.push(...groupNodesObj.evenNodes);
        }
    }

    return { group1, group2 };
}

function getBipartiteGroups(rootNode) {
    const queue = [];
    const oddNodes = [];
    const evenNodes = [];

    rootNode.level = 0;
    rootNode.state = 'visiting';
    queue.push(rootNode);

    while (queue.length > 0) {
        const currentNode = queue.shift(); // we want FIFO, so using shift() instead of pop() to get the head (not the rear)
        if (currentNode.level % 2 === 0) {
            evenNodes.push(currentNode);
        } else {
            oddNodes.push(currentNode);
        }

        for (neighbor in currentNode.neighbors) {
            if (neighbor.state === 'unvisited') {
                neighbor.level = currentNode.level + 1;
                queue.push(neighbor);
                neighbor.state = 'visiting';
            } else if (neighbor.state === 'visited') {
                if (neighbor.level === currentNode.level) {
                    return null; // NOT bipartite by criteria!!
                }
            }
        }

        currentNode.state = 'visited';
    }

    return { oddNodes, evenNodes };
}