/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */


var findLadders = function (beginWord, endWord, wordList) {
    const wordListSet = new Set(wordList);
    let globalMinSteps = Infinity;
    const globalPaths = [];
    const pathQueue = [[beginWord]];
    const visited = { [beginWord]: true };

    while (pathQueue.length > 0) {
        const currentPath = pathQueue.shift();
        const currentWord = currentPath[currentPath.length - 1];
        const numSteps = currentPath.length + 1;

        const neighbors = getNeighbors(currentWord, wordListSet);
        for (let ii = 0; ii < neighbors.length; ii++) {
            const neighbor = neighbors[ii];
            if (!visited[neighbor]) {
                pathQueue.push([...currentPath, neighbor]);
            }

            if (neighbor === endWord) {
                if (numSteps <= globalMinSteps) {
                    globalMinSteps = numSteps;
                    globalPaths.push([...currentPath, neighbor]);
                }
            }
        }

        visited[currentWord] = true;
    }

    return globalPaths;
}


function getNeighbors(word, wordListSet) {
    const neighbors = [];
    for (let charIndex = 0; charIndex < word.length; charIndex++) {
        for (let charCode = 97; charCode < 123; charCode++) {
            const variableChar = String.fromCharCode(charCode);
            const tempWord = word.substring(0, charIndex) + variableChar + word.substring(charIndex + 1, word.length);
            if (wordListSet.has(tempWord) && tempWord !== word) {
                neighbors.push(tempWord);
            }
        }
    }

    return neighbors;
}
