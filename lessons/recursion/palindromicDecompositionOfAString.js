
/*
 * Complete the function below.
 */
function generate_palindromic_decompositions(s) {
    const results = [];
    helper(0, [], s, results);
    return results;
}

function helper(startIndex, slate, fullStr, results) {
    if (startIndex === fullStr.length) {
        results.push(slate.join('|'));
        return;
    }

    for (let endIndex = startIndex; endIndex < fullStr.length; endIndex++) {
        const currentSubstr = fullStr.substring(startIndex, endIndex + 1);
        if (isPalindrome(currentSubstr)) {
            slate.push(currentSubstr);
            helper(endIndex + 1, slate, fullStr, results);
            slate.pop();
        }
    }
}

function isPalindrome(str) {
    let leftIndex = 0, rightIndex = str.length - 1;
    while (leftIndex < rightIndex) {
        if (str[leftIndex] !== str[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }

    return true;
}
/*
 * Complete the function below.
 */
function generate_palindromic_decompositions(s) {
    const results = [];
    helper(0, [], s, results);
    return results;
}

function helper(startIndex, slate, fullStr, results) {
    if (startIndex === fullStr.length) {
        results.push(slate.join('|'));
        return;
    }

    for (let endIndex = startIndex; endIndex < fullStr.length; endIndex++) {
        const currentSubstr = fullStr.substring(startIndex, endIndex + 1);
        if (isPalindrome(currentSubstr)) {
            slate.push(currentSubstr);
            helper(endIndex + 1, slate, fullStr, results);
            slate.pop();
        }
    }
}

function isPalindrome(str) {
    let leftIndex = 0, rightIndex = str.length - 1;
    while (leftIndex < rightIndex) {
        if (str[leftIndex] !== str[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }

    return true;
}