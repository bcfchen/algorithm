// Print Elements of a Matrix in Spiral Order

function printElementsSpiralOrder(matrix) {
    if (!matrix || matrix.length === 0) { return; }

    // note that this is NOT number of layers, but last layer index
    // picture a 2 x 3 matrix. In that case you would have 2 layers not 3,
    // with last layer index being 1
    const lastLayerIndex = Math.floor(matrix.length / 2);

    // dont forget to include your lastLayerIndex in the loop
    for (let layerIndex = 0; layerIndex <= lastLayerIndex; layerIndex++) {
        printElementsInLayer(matrix, layerIndex);
    }
}

function printElementsInLayer(matrix, layerIndex) {
    // for every spiral layer, we define the first and last columns and rows
    let firstColumn = layerIndex,
        lastColumn = matrix[0].length - 1 - layerIndex,
        firstRow = layerIndex,
        lastRow = matrix.length - 1 - layerIndex;

    // in the case where we're at the center-most layer, and that layer only
    // has one element, we should just print it
    if (lastRow === layerIndex && lastColumm === layerIndex) {
        console.log(matrix[layerIndex][layerIndex]);
        return;
    }

    // print top
    // note that this does not include the rightmost element of the first row.
    // that element belongs to the right column
    for (let ii = firstColumn; ii < lastColumn; ii++) {
        console.log(matrix[firstRow][ii]);
    }

    // print right wall
    // note that this does not include the bottom element of the right column.
    // that element belongs to the bottom
    for (let ii = firstRow; ii < lastRow; ii++) {
        console.log(matrix[ii][lastColumn]);
    }

    // print bottom
    // note that this does not include the bottom element of the left column.
    // that element belongs to the left
    for (let ii = lastColumn; ii > firstColumn; ii--) {
        console.log(matrix[lastRow][ii]);
    }

    // print left
    // note that this does not include the top element of the left column.
    // that element belongs to the top
    for (let ii = lastRow; ii > firstRow; ii--) {
        console.log(matrix[ii][firstColumn]);
    }
}

// this should print 2, 3, 1, 6, 7, 9, 11, 4, 8, 12, 13, 5
// console.log(printElementsSpiralOrder([[2, 3, 1, 6], [12, 13, 5, 7], [8, 4, 11, 9]]));
console.log(printElementsSpiralOrder([[6, 9, 7]]));