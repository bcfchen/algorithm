// Rotate a 2 array clockwise by 90 degrees, like rotating the pixels of an image.
// You can assume that this is a square matrix, so the width and the height are the same. 
// Also you need to rotate this in-place by modifying the original array, 
// meaning you cannot create another 2D array to do this

function rotateMatrix(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length !== matrix.length) { return; }
    // we think of matrix in "layers" wrapping around the center
    // the main loop is to iterate from the outer layer to the innermost layer 
    // (which is just the 1 center element)
    const numberOfLayers = Math.floor(matrix.length / 2);
    // iterate over the layers
    for (let layerIndex = 0; layerIndex < numberOfLayers; layerIndex++) {
        rotateLayerOfMatrix(matrix, layerIndex);
    }

    return matrix;
}

function rotateLayerOfMatrix(matrix, layerIndex) {
    const startIndex = layerIndex;
    const endIndex = matrix.length - 1 - layerIndex; // ex. for a 5 x 5 matrix, layer 1 ends at 5 - 1 - 1 = 3
    for (let ii = 0; ii < endIndex - startIndex; ii++) {
        // store top element
        const storedTopElem = matrix[startIndex][startIndex + ii];
        // rotate left to top
        matrix[startIndex][startIndex + ii] = matrix[endIndex - ii][startIndex];
        // rotate bottom to left
        matrix[endIndex - ii][startIndex] = matrix[endIndex][endIndex - ii];
        // rotate right to bottom
        matrix[endIndex][endIndex - ii] = matrix[startIndex + ii][endIndex];
        // top to left
        matrix[startIndex + ii][endIndex] = storedTopElem;
    }
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));