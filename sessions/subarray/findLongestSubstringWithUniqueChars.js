// Given a string, find the longest substring with unique characters
// Return the start/end indices pair
// Example: “whatwhywhere” -> “atwhy”, so [2, 6] is the answer

/* 
** We can use sliding window (with startIndex and endIndex)
** 1. keep sliding endIndex towards the right
** 2. use a map to keep track of encountered characters and their indices
** 3. use array to keep track of [start, end], and variable to track current longest length
** 4. when endIndex encounters a character that you met before (already in map), 
**    move startIndex one index after that character's fist occurrence and start a new word
*/
function findLongestUniqueSubstring(str) {
    const charArr = str.split('');
    let longestLength = 1,
        startIndex = 0,
        endIndex = 0;
    let results = [0, 0], map = {};

    while (endIndex < str.length) {
        const endChar = charArr[endIndex];
        if (map[endChar] !== undefined && map[endChar] >= startIndex) {
            startIndex = map[endChar] + 1;
        }

        map[endChar] = endIndex;
        const currentStrLength = endIndex - startIndex + 1;
        if (currentStrLength > longestLength) {
            longestLength = currentStrLength;
            results = [startIndex, endIndex];
        }

        endIndex++;
    }

    return results;
}

// atwhy”, so [2, 6] is the answer
console.log(findLongestUniqueSubstring("whatwhywhere"));