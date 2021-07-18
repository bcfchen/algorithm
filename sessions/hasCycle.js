function hasCycle(graph) {
    for (node in graph.nodes) {
        if (node.state === 'unvisited' && hasCycleDFSVisit(node)) {
            return true;
        }
    }

    return false;
}

function hasCycleDFSVisit(node) {
    node.state = 'visiting';
    for (neighbor in node.neighbors) {
        if (neighbor.state === 'visiting') {
            return true;
        } else if (neighbor.state === 'unvisited' && hasCycleDFSVisit(neighbor) === true) {
            return true;
        }
    }

    node.state = 'visited';
    return false;
}