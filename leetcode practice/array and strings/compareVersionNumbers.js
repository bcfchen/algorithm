/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const version1Arr = version1.split('.');
    const version2Arr = version2.split('.');
    const maxLength = Math.max(version1Arr.length, version2Arr.length);

    for (let ii = 0; ii < maxLength; ii++) {
        const version1Revision = version1Arr[ii] ? parseInt(version1Arr[ii]) : 0;
        const version2Revision = version2Arr[ii] ? parseInt(version2Arr[ii]) : 0;

        if (version1Revision > version2Revision) {
            return 1;
        }

        if (version2Revision > version1Revision) {
            return -1;
        }
    }

    return 0;
};