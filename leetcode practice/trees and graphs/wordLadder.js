/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function (beginWord, endWord, wordList) {
    const VISITED = 'visited';
    const VISITING = 'visiting';
    const UNVISITED = 'unvisited';

    const statusMap = { beginWord: VISITING };
    const genericToWordMap = buildGenericToWordMap([beginWord, ...wordList]);
    const toVisitQueue = [{ word: beginWord, level: 1 }];

    while (toVisitQueue.length > 0) {
        const currentWordObj = toVisitQueue.shift();
        statusMap[currentWordObj.word] = VISITING;

        const neighborWords = getNeighbors(currentWordObj.word, genericToWordMap);
        for (let ii = 0; ii < neighborWords.length; ii++) {
            const neighborWord = neighborWords[ii];
            const currentLevel = currentWordObj.level + 1;
            if (neighborWord === endWord) {
                return currentLevel;
            }

            if (statusMap[neighborWord] === VISITING || statusMap[neighborWord] === VISITED) { continue; }

            statusMap[neighborWord] = VISITING;
            toVisitQueue.push({ word: neighborWord, level: currentLevel });
        }

        statusMap[currentWordObj.word] = VISITED;
    }

    return 0;
}

function getNeighbors(word, genericToWordMap) {
    const neighbors = [];
    for (let charIndex = 0; charIndex < word.length; charIndex++) {
        const wildcardWord = word.substring(0, charIndex) + '*' + word.substring(charIndex + 1, word.length);
        neighbors.push(...genericToWordMap[wildcardWord]);
    }

    return neighbors;
}

function buildGenericToWordMap(wordList) {
    if (!wordList) { return {}; }

    const genericToWordMap = {};
    for (let wordIndex = 0; wordIndex < wordList.length; wordIndex++) {
        const currentWord = wordList[wordIndex];
        for (let charIndex = 0; charIndex < currentWord.length; charIndex++) {
            const wildcardWord = currentWord.substring(0, charIndex) + '*' + currentWord.substring(charIndex + 1, currentWord.length);
            genericToWordMap[wildcardWord] = !genericToWordMap[wildcardWord] ? [currentWord] : [...genericToWordMap[wildcardWord], currentWord];
        }
    }

    return genericToWordMap;
}
