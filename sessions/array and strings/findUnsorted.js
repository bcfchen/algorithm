function findUnsorted(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    let startIndex = 0, endIndex = arr.length - 1;
    // go from start and find first dip
    while (arr[startIndex] < arr[startIndex + 1] && startIndex < endIndex) {
        startIndex++;
    }

    if (startIndex === endIndex) {
        return null;
    }

    // go from end and find first bump
    while (arr[endIndex] > arr[endIndex - 1] && endIndex > 0) {
        endIndex--;
    }

    const subset = arr.slice(startIndex, endIndex + 1);
    const [minVal, maxVal] = [Math.min(...subset), Math.max(...subset)];

    while (startIndex > 0 && arr[startIndex - 1] > minVal) {
        startIndex--;
    }

    while (endIndex < arr.length - 1 && arr[endIndex + 1] < maxVal) {
        endIndex++;
    }

    return [startIndex, endIndex];
}

// should return [2, 7], meaning the subset [4, 5, 3, 7, 5, 6]
console.log(findUnsorted([1, 2, 4, 5, 3, 7, 5, 6, 8]));
