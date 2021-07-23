// Check if a string A is a rotation of another string B
// For example, “atbobc” is a rotation of “bobcat”

function checkRotation(targetStr, refStr) {
    if (!targetStr || targetStr.length === 0 || !refStr || refStr.length === 0 || targetStr.length !== refStr.length) {
        return false;
    }

    return (refStr + refStr).includes(targetStr);
}

console.log(checkRotation('atbobc', 'bobcat'));