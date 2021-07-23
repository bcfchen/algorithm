// Reverse the order of the words in a string
// For example: “what is your name” -> “name your is what”

function reverseOrderOfWords(wordsToReverse) {
    const wordsToReverseArr = wordsToReverse.split('');

    // first we reverse the whole sentence
    reverseChars(wordsToReverseArr, 0, wordsToReverseArr.length - 1);

    // loop from beginning of arr to second to last character,
    // look for start of string, and look for space, and 
    // reverse the characters in between 
    let wordStartIndex = 0;
    for (let ii = 0; ii < wordsToReverseArr.length - 1; ii++) {
        if (wordsToReverseArr[ii + 1] === ' ') {
            reverseChars(wordsToReverseArr, wordStartIndex, ii);
            wordStartIndex = ii + 2;
        }
    }

    // reverse the last word
    reverseChars(wordsToReverseArr, wordStartIndex, wordsToReverseArr.length - 1);
    return wordsToReverseArr;
}

function reverseChars(wordsToReverseArr, firstIndex, lastIndex) {
    while (firstIndex < lastIndex) {
        [wordsToReverseArr[firstIndex], wordsToReverseArr[lastIndex]]
            = [wordsToReverseArr[lastIndex], wordsToReverseArr[firstIndex]];
        firstIndex++;
        lastIndex--;
    }
}

// should print "string a is this"
console.log(reverseOrderOfWords('this is a string'));