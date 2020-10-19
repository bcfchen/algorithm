
/* 
    Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

    Only one letter can be changed at a time.
    Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
    Note:

    Return 0 if there is no such transformation sequence.
    All words have the same length.
    All words contain only lowercase alphabetic characters.
    You may assume no duplicates in the word list.
    You may assume beginWord and endWord are non-empty and are not the same.
*/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const nextWordsToEval = [{name: beginWord, level: 1}];
    const visitedWords = {beginWord: true}
    const genericWordToPermutations = {};
    
    // generate word to permutations dictionary from wordList
    wordList.forEach(word => {
        for(let ii=0;ii<word.length;ii++){
            const genericWord = word.substring(0, ii) + '*' + word.substring(ii+1, word.length);
            const wordsMappedToGeneric = genericWordToPermutations[genericWord] || [];
            wordsMappedToGeneric.push(word);
            genericWordToPermutations[genericWord] = wordsMappedToGeneric;
        }
    });
        
    while(nextWordsToEval.length){
        const nextWordToEval = nextWordsToEval.shift();
        const currentWord = nextWordToEval.name;
        const currentLevel = nextWordToEval.level;
        for(let ii=0;ii<currentWord.length;ii++){
            const currentWordAsGeneric = currentWord.substring(0, ii) + '*' + currentWord.substring(ii+1, currentWord.length);
            const wordsMappedToCurrentGeneric = genericWordToPermutations[currentWordAsGeneric] || [];
            for(let jj=0;jj<wordsMappedToCurrentGeneric.length;jj++){
                const wordMappedToCurrentGeneric = wordsMappedToCurrentGeneric[jj];
                if (wordMappedToCurrentGeneric === endWord){
                    return currentLevel + 1;
                }
                
                if (!visitedWords[wordMappedToCurrentGeneric]){
                    visitedWords[wordMappedToCurrentGeneric] = true;
                    // note that we need to use a map to store the upcoming words with their current level, 
                    // we need to keep track of which level they belong in, because their level isnt necessarily
                    // mapped to number of loops 
                    nextWordsToEval.push({name: wordMappedToCurrentGeneric, level: currentLevel + 1});
                }
            }
        }
    }
    
    return 0;
};