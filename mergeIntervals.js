/*
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * Example 2:
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
*/


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    if (!intervals || intervals.length === 0) { return []; }

    // sort intervals forwards, as in one with small start comes first
    // ex. [[1,3],[8,10],[2,6]] -> [[1,3],[2,6],[8,10]] 
    intervals.sort((elem1, elem2) => elem1.start - elem2.start);
    // put the biggest one, [8,10] into results first
    let results = [intervals[0]];

    // loop through the rest
    for (let ii = 1; ii < intervals.length; ii++) {
        let elem = intervals[ii];
        let prevElem = results[results.length - 1];
        // this is to handle case of no overlap
        // in this case, we'll want to keep prevElem in our results since it's in order but also add elem to results (like when we see [2,6],[8,10]) results should contain both of these)
        if (elem.start > prevElem.end) {
            results.push(elem);
        }
        // this is where we handle the overlapping case. we want to keep the prevElem, but update its "end" to the end of the current one
        else {
            results[results.length - 1].end = Math.max(elem.end, prevElem.end);
        }
    }

    return results;
};