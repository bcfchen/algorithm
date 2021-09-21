
function binaryStrings(n) {
    const results = [];
    const slate = [];
    binaryStringsHelper(slate, n, results);
}

function binaryStringsHelper(slate, n, results) {
    // base case
    if (n === slate.length) {
        results.push(slatej.join(''));
    } else {
        // main logic
        slate.push(0);
        binaryStringsHelper(slate, n, results);
        slate.pop();

        slate.push(1);
        binaryStringsHelper(slate, n, results);
        slate.pop();
    }
}