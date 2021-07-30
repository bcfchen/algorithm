/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    // make paragraph into an array, and remove the , etc
    const wordsArr = paragraph.toLowerCase().split(/\W+/);

    // make banned into a map
    const bannedMap = banned.reduce((bannedMap, bannedWord) => ({ ...bannedMap, [bannedWord]: true }), {});


    const wordCount = {};
    // loop through each word, if not banned then count it
    for (let ii = 0; ii < wordsArr.length; ii++) {
        const word = wordsArr[ii];
        if (!bannedMap[word]) {
            wordCount[word] = wordCount[word] === undefined ? 1 : wordCount[word] + 1;
        }
    }

    let maxWordCount = 0;
    let maxWord = '';
    for (word in wordCount) {
        const currentWordCount = wordCount[word];
        if (currentWordCount > maxWordCount) {
            maxWordCount = currentWordCount;
            maxWord = word;
        }
    }

    return maxWord;
};