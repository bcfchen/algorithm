function coinChange(targetAmount, coinValues) {
    // initialize an array from 0 to targetAmount
    // length is targetAmount + 1 to take 0 into account
    const elements = Array(targetAmount + 1).fill(0);
    elements[0] = 1;
    for (const coinValue of coinValues) {
        // notice that we start from ii=coinValue instead of ii=0 here
        // there's no way of making 0, 1, or 2 dollars with 3 dollar coins
        // also if ii < coinValue, then ii-coinValue < 0 and is out of range
        for (let ii = coinValue; ii < elements.length; ii++) {
            elements[ii] = elements[ii] + elements[ii - coinValue];
        }
    }

    return elements[targetAmount];
}

console.log(coinChange(5, [1, 2, 5]));