var maxArea = function (bars) {
    let globalMaxArea = 0;
    let leftIndex = 0, rightIndex = bars.length - 1;

    while (rightIndex > leftIndex) {
        const currentArea = Math.min(bars[leftIndex], bars[rightIndex]) * (rightIndex - leftIndex);
        globalMaxArea = Math.max(globalMaxArea, currentArea)

        if (bars[leftIndex] < bars[rightIndex]) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }

    return globalMaxArea;
};