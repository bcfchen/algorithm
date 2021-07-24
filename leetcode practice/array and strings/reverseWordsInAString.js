/*
** Given an input string s, reverse the order of the words.
** A word is defined as a sequence of non-space characters.
** The words in s will be separated by at least one space.
** Return a string of the words in reverse order concatenated by a single space.
** Note that s may contain leading or trailing spaces or multiple spaces between two words.
** The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

// Input: s = "the sky is blue"
// Output: "blue is sky the"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const stringAsArr = trimSpacesAndReverse(s);

    // loop through characters array
    let startIndex = 0, endIndex = 0;
    while (endIndex <= stringAsArr.length) {
        if (stringAsArr[endIndex + 1] === ' ') {
            reverseChars(stringAsArr, startIndex, endIndex);
            endIndex += 2;
            startIndex = endIndex;
        } else {
            endIndex++;
        }
    }

    reverseChars(stringAsArr, startIndex, stringAsArr.length - 1);
    return stringAsArr.join('');
};

function trimSpacesAndReverse(str) {
    let startIndex = 0, endIndex = str.length - 1;
    while (str[startIndex] === ' ') {
        startIndex++;
    }

    while (str[endIndex] === ' ') {
        endIndex--;
    }

    // remove extra spaces in between
    const trimmedArr = [];
    for (let ii = endIndex; ii >= startIndex; ii--) {
        if (str[ii] !== ' ') {
            trimmedArr.push(str[ii]);
        }

        if (str[ii] === ' ' && str[ii - 1] !== ' ') {
            trimmedArr.push(str[ii]);
        }
    }

    return trimmedArr;
}

function reverseChars(charArr, startIndex, endIndex) {
    while (startIndex < endIndex) {
        [charArr[startIndex], charArr[endIndex]] = [charArr[endIndex], charArr[startIndex]];
        startIndex++;
        endIndex--;
    }
}