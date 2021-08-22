/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function (image, sr, sc, newColor) {
    function traverse(image, rowIndex, colIndex, oldColor, newColor) {
        const indexOOB = rowIndex < 0 || colIndex < 0 || rowIndex >= image.length || colIndex >= image[0].length;
        if (indexOOB || image[rowIndex][colIndex] !== oldColor || image[rowIndex][colIndex] === newColor) {
            return;
        }

        image[rowIndex][colIndex] = newColor;
        traverse(image, rowIndex + 1, colIndex, oldColor, newColor);
        traverse(image, rowIndex - 1, colIndex, oldColor, newColor);
        traverse(image, rowIndex, colIndex + 1, oldColor, newColor);
        traverse(image, rowIndex, colIndex - 1, oldColor, newColor);
    }

    const oldColor = image[sr][sc];
    traverse(image, sr, sc, oldColor, newColor);
    return image;
}
