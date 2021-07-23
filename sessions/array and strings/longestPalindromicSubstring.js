// Find the longest palindromic substring in a string
// For example:
// "abcababadef" => "ababa"
// "ffabbahh" => “abba"

function longestPalindromicSubstring(fullStr) {
    if (!fullStr || fullStr.length === 0) { return null; }
    const fullCharsArr = fullStr.split('');
    let result = [];
    let currentMaxPalindromeLength = 0;

    // handle odd length string
    for (let ii = 0; ii < fullCharsArr.length - 1; ii++) {
        // expand outwards from ii and check for palindrome
        let offset = 0;
        while (isValidIndex(ii - offset - 1, fullCharsArr)
            && isValidIndex(ii + offset + 1, fullCharsArr)
            && fullCharsArr[ii - offset - 1] === fullCharsArr[ii + offset + 1]) {
            offset++;
        }

        const palindromeLengthAtIndex = 2 * offset + 1;
        if (palindromeLengthAtIndex > currentMaxPalindromeLength) {
            currentMaxPalindromeLength = palindromeLengthAtIndex;
            result = [ii - offset, ii + offset];
        }
    }

    // handle even length string
    for (let ii = 0; ii < fullCharsArr.length - 1; ii++) {
        // expand outwards from ii and check for palindrome
        let offset = 0;
        while (isValidIndex(ii - offset, fullCharsArr)
            && isValidIndex(ii + offset + 1, fullCharsArr)
            && fullCharsArr[ii - offset] === fullCharsArr[ii + offset + 1]) {
            offset++;
        }

        const palindromeLengthAtIndex = 2 * offset;
        if (palindromeLengthAtIndex > currentMaxPalindromeLength) {
            currentMaxPalindromeLength = palindromeLengthAtIndex;
            result = [ii - offset + 1, ii + offset];
        }
    }

    return result;
}

function isValidIndex(index, fullStr) {
    return index >= 0 && index < fullStr.length;
}

// this should return [2, 6]
console.log(longestPalindromicSubstring('abcivicyz'));
// this should return [2, 5]
console.log(longestPalindromicSubstring('xybaabop'));