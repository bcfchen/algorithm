/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (str, target) {
    if (str.length === 0 || target.length === 0) { return ''; }

    const targetCharMap = {};
    for (let char of target) {
        targetCharMap[char] = targetCharMap[char] === undefined ? 1 : targetCharMap[char] + 1;
    }

    const currentCharMap = {};
    let requiredCharNum = Object.keys(targetCharMap).length;
    let satisfiedCharNum = 0;
    let startIndex = 0, endIndex = 0;
    let globalMinWindowLength = Number.MAX_SAFE_INTEGER;
    let globalMinWindow = [];

    while (endIndex < str.length) {
        const endIndexChar = str[endIndex];
        currentCharMap[endIndexChar] = currentCharMap[endIndexChar] === undefined ? 1 : currentCharMap[endIndexChar] + 1;

        if (currentCharMap[endIndexChar] === targetCharMap[endIndexChar]) {
            satisfiedCharNum++;
        }

        while (satisfiedCharNum === requiredCharNum) {
            const currentWindowLength = endIndex - startIndex + 1;
            if (currentWindowLength < globalMinWindowLength) {
                globalMinWindowLength = currentWindowLength;
                globalMinWindow = [startIndex, endIndex]
            }

            // before moving startIndex to the right, we
            // need to reduce the current char count of 
            // the character that startIndex is at, since
            // we're moving our window away from it
            const startIndexChar = str[startIndex];
            currentCharMap[startIndexChar]--;

            // if startIndex's character is one of the target
            // characters, we check to see if 
            if (currentCharMap[startIndexChar] < targetCharMap[startIndexChar]) {
                satisfiedCharNum--;
            }

            startIndex++;
        }

        endIndex++;
    }

    return str.slice(globalMinWindow[0], globalMinWindow[1] + 1)
};
