/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (bars) {
    if (!bars || bars.length === 0) { return null; }

    const stack = [];
    let globalVolume = 0;
    for (let barIndex = 0; barIndex < bars.length; barIndex++) {
        while (stack.length !== 0 && bars[barIndex] > bars[stack[stack.length - 1]]) {
            const shortBarIndex = stack.pop();
            if (stack.length === 0) { break; }
            const lastPeakIndex = stack[stack.length - 1];
            const numberOfBars = barIndex - lastPeakIndex - 1;
            const heightDifference = Math.min(bars[barIndex], bars[lastPeakIndex]) - bars[shortBarIndex];
            globalVolume += heightDifference * numberOfBars;
        }

        stack.push(barIndex);
    }

    return globalVolume;
};