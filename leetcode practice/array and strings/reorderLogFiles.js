/**
 * @param {string[]} logs
 * @return {string[]}
 */

/* helper functions */
const logComparator = (logA, logB) => {
    // compare body first
    const bodyCompareResult = getLogBody(logA).localeCompare(getLogBody(logB));
    if (bodyCompareResult !== 0) { return bodyCompareResult; }

    return logA.localeCompare(logB);
}

const getLogBody = logStr => logStr.slice(logStr.indexOf(' ') + 1, logStr.length);
const getIsNumLog = logStr => /\d/.test(logStr);

/* end of helper functions */

var reorderLogFiles = function (logs) {
    const digitLogs = [], letterLogs = [];
    for (log of logs) {
        if (getIsNumLog(getLogBody(log))) {
            digitLogs.push(log);
        } else {
            letterLogs.push(log);
        }
    }

    return [...letterLogs.sort(logComparator), ...digitLogs];
};
