/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);

    const mergedCollection = [intervals[0]];
    for (let intervalIndex = 1; intervalIndex < intervals.length; intervalIndex++) {
        const intervalObj = intervals[intervalIndex];
        const mergedObj = mergedCollection[mergedCollection.length - 1];

        // no overlap
        if (intervalObj[0] > mergedObj[1]) {
            // simply append to mergedCollection
            mergedCollection.push(intervalObj);
        } else {
            mergedObj[1] = Math.max(mergedObj[1], intervalObj[1]);
        }
    }

    return mergedCollection;
};