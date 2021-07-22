// Move all zeros to the beginning of an array
// Example: [0, 2, 1, 0, 3, 3, 0] -> [0, 0, 0, 2, 1, 3, 3]

function moveZeros(arr) {
    let boundaryIndex = 0;
    for (let movingIndex = 0; movingIndex < arr.length; movingIndex++) {
        if (arr[movingIndex] === 0) {
            [arr[boundaryIndex], arr[movingIndex]] = [arr[movingIndex], arr[boundaryIndex]];
            boundaryIndex++;
        }
    }

    return arr;
}

// should return [0, 0, 0, 2, 3, 3, 1]
console.log(moveZeros([0, 2, 1, 0, 3, 3, 0]));