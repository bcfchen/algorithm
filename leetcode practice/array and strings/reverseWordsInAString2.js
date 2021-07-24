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
var reverseWords = function (str) {
    reverseChars(str, 0, str.length - 1);

    // loop from beginning of arr to second to last character,
    // look for start of string, and look for space, and 
    // reverse the characters in between 
    let wordStartIndex = 0;
    for (let ii = 0; ii < str.length - 1; ii++) {
        if (str[ii + 1] === ' ') {
            reverseChars(str, wordStartIndex, ii);
            wordStartIndex = ii + 2;
        }
    }

    // reverse the last word
    reverseChars(str, wordStartIndex, str.length - 1);
    return str;
};

function reverseChars(wordsToReverseArr, firstIndex, lastIndex) {
    while (firstIndex < lastIndex) {
        [wordsToReverseArr[firstIndex], wordsToReverseArr[lastIndex]]
            = [wordsToReverseArr[lastIndex], wordsToReverseArr[firstIndex]];
        firstIndex++;
        lastIndex--;
    }
}