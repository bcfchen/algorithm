// Given a list of stock prices, find the maximum amount of money you could have made
// with one trade (one buy & sell).
// For example, if A = [2, 3, 1, 4, 5, 7, 5, 4], 
// the max money with a single trade is 6, if you buy at 1 and sell at 7

function maxDiff(arr) {
    if (!arr || arr.length < 2) { return 0; }
    let minPriceSoFar = arr[0], maxTradeSoFar = 0;
    for (let ii = 0; ii < arr.length; ii++) {
        minPriceSoFar = Math.min(minPriceSoFar, arr[ii]);
        const maxTradeAtCurrentIndex = arr[ii] - minPriceSoFar;
        maxTradeSoFar = Math.max(maxTradeAtCurrentIndex, maxTradeSoFar);
    }

    return maxTradeSoFar;
}

// this should print 7
console.log(maxDiff([8, 14, 2, 5, 7, 3, 9, 5])); 