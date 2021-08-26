/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const rootTrieNode = buildTrie(words);

    const numRows = board.length, numCols = board[0].length;
    const collection = new Set();
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        for (let colIndex = 0; colIndex < numCols; colIndex++) {
            searchWord(rootTrieNode, board, rowIndex, colIndex, collection);
        }
    }

    return [...collection];
};

function searchWord(parentNode, board, rowIndex, colIndex, collection) {
    if (!board[rowIndex] || !board[rowIndex][colIndex]) { return; }

    const tempChar = board[rowIndex][colIndex];
    board[rowIndex][colIndex] = '$';
    const currentNode = parentNode.children[tempChar];
    if (currentNode) {
        if (currentNode.word) {
            collection.add(currentNode.word);
        }
        searchWord(currentNode, board, rowIndex + 1, colIndex, collection);
        searchWord(currentNode, board, rowIndex - 1, colIndex, collection);
        searchWord(currentNode, board, rowIndex, colIndex + 1, collection);
        searchWord(currentNode, board, rowIndex, colIndex - 1, collection);
    }

    board[rowIndex][colIndex] = tempChar;
}

function buildTrie(wordsArr) {
    const root = new TrieNode();

    for (let word of wordsArr) {
        let currentNode = root;
        for (let charIndex = 0; charIndex < word.length; charIndex++) {
            const currentChar = word[charIndex];
            if (!currentNode.children[currentChar]) {
                currentNode.children[currentChar] = new TrieNode();
            }

            currentNode = currentNode.children[currentChar];
        }

        currentNode.word = word;
    }

    return root;
}

class TrieNode {
    constructor() {
        this.children = {};
    }
}