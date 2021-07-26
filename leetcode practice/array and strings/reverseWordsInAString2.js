/* 
** Given a character array s, reverse the order of the words.
** A word is defined as a sequence of non-space characters. 
** The words in s will be separated by a single space.
** Your code must solve the problem in-place, i.e. without allocating extra space.
*/


/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function (s) {
    let startIndex = 0;
    while (s[startIndex] === ' ') {
        startIndex++;
    }

    let endIndex = s.length - 1;
    while (s[endIndex] === ' ') {
        endIndex--;
    }

    let word = '';
    const wordsArr = [];
    for (let charIndex = startIndex; charIndex <= endIndex; charIndex++) {
        if (s[charIndex] !== ' ') {
            word += s[charIndex];
        } else if (word.length !== 0 && s[charIndex] === ' ') {
            wordsArr.unshift(word);
            word = '';
        }
    }

    // dont forget about the last word
    wordsArr.unshift(word);

    return wordsArr.join(' ');
};