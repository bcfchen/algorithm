function colorConnectedComponents(graph) {
    let color = 0; // represent colors with numbers
    for (node in graph.nodes) {
        dfsVisit(node, color++);
    }
}

function dfsVisit(node, color) {
    node.state = 'visiting';
    node.color = color;

    for (neighbor in node.neighbors) {
        if (neighbor.state === 'unvisited') {
            dfsVisit(neighbor, color);
        }
    }

    node.state = 'visited';
}