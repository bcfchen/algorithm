
function combinations(n, k) {
    const results = [];
    helper([], n, k, 1, results);
    return results;
}

function helper(slate, n, k, currentIndex, results) {
    if (slate.length === k) {
        results.push([...slate]);
        return;
    }

    if (currentIndex > n) {
        return;
    }

    // include
    slate.push(currentIndex);
    helper(slate, n, k, currentIndex + 1, results);
    slate.pop();

    // exclude
    helper(slate, n, k, currentIndex + 1, results);
}

console.log(JSON.stringify(combinations(4, 2)));