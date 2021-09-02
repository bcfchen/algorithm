/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const collectedValidParens = [];

    traverse(0, 0, '', collectedValidParens, n);

    return collectedValidParens;
};

function traverse(openParenCount, closedParenCount, currentStr, collectedValidParens, maxParenCount) {
    if (closedParenCount === maxParenCount && openParenCount === maxParenCount) {
        collectedValidParens.push(currentStr);
        return;
    }

    if (openParenCount < maxParenCount) {
        traverse(openParenCount + 1, closedParenCount, `${currentStr}(`, collectedValidParens, maxParenCount);
    }

    if (closedParenCount < openParenCount) {
        traverse(openParenCount, closedParenCount + 1, `${currentStr})`, collectedValidParens, maxParenCount);
    }
}
