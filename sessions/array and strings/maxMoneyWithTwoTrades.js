
function maxMoneyWithTwoTrades(dailyPrices) {
    // create an array to store max trade values up till a certain date
    const bestTradeValueTillDate = [];
    let minPriceSoFar = dailyPrices[0];
    let maxTradeValueTillDate = 0;

    // we go from the front of our dailyPrices and calculate the best trade up till each date (ii)
    for (let ii = 0; ii < dailyPrices.length; ii++) {
        minPriceSoFar = Math.min(minPriceSoFar, dailyPrices[ii]);
        const currentMaxTradeValue = dailyPrices[ii] - minPriceSoFar;
        maxTradeValueTillDate = Math.max(maxTradeValueTillDate, currentMaxTradeValue);
        bestTradeValueTillDate[ii] = maxTradeValueTillDate;
    }

    // we go from the back of our dailyPrices and calculate the best trade after each date (ii)
    const bestTradeValuesAfterDate = [];
    let maxPriceSoFar = dailyPrices[dailyPrices.length - 1];
    let maxTradeValueAfterDate = 0;
    for (let ii = dailyPrices.length - 1; ii >= 0; ii--) {
        maxPriceSoFar = Math.max(maxPriceSoFar, dailyPrices[ii]);
        const currentMaxTradeValue = maxPriceSoFar - dailyPrices[ii];
        maxTradeValueAfterDate = Math.max(maxTradeValueAfterDate, currentMaxTradeValue);
        bestTradeValuesAfterDate[ii] = maxTradeValueAfterDate;
    }

    // now we iterate through each day and 
    // sum up the max trade value up till that date + max trade value after that date.
    // this will give us the max trade value for every date, then we just pick the greatest of them
    let maxTrade = 0;
    for (let ii = 0; ii < dailyPrices.length; ii++) {
        // keep in mind that we basically need to sum bestTradeValueTillDate[ii] + bestTradeValuesAfterDate[ii + 1]
        // since the dates between these two should not overlap. 
        // hence, at the last index (ii == dailyPrices.length - 1), we should use 0 instead of bestTradeValuesAfterDate[ii + 1]
        // since bestTradeValuesAfterDate[ii + 1] would be out of bounds
        const maxSecondTrade = ii === dailyPrices.length - 1 ? 0 : bestTradeValuesAfterDate[ii + 1]
        maxTrade = Math.max(maxTrade, bestTradeValueTillDate[ii] + maxSecondTrade);
    }

    return maxTrade;
}

// this should be 13, from the 14 - 8 and then 9 - 2
console.log(maxMoneyWithTwoTrades([8, 14, 2, 5, 7, 3, 9, 5]));