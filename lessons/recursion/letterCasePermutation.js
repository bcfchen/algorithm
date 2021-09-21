
// Complete the function below.
// The function takes a STRING as input and is expected to return a STRING ARRAY.
function letter_case_permutations(str) {
    const results = [];
    helper(0, [], str, results);
    return results;
}

function helper(currentIndex, slate, str, results) {
    if (currentIndex === str.length) {
        results.push(slate.join(''));
        return;
    }
    const currentChar = str[currentIndex];
    if (isAlphabet(currentChar)) {
        //  uppercase
        helper(currentIndex + 1, [...slate, currentChar.toUpperCase()], str, results);
        //  lowercase
        helper(currentIndex + 1, [...slate, currentChar.toLowerCase()], str, results);
    } else {
        helper(currentIndex + 1, [...slate, currentChar], str, results);
    }

}

function isAlphabet(char) {
    return /[a-zA-Z]/.test(char);
}